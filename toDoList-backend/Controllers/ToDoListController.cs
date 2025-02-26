using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoList.Backend.Database;
using ToDoList.Backend.Entity;

namespace ToDoList.Backend.Controllers;

[Route("api/[controller]/[action]")]
[ApiController]
public class ToDoListController(ToDoListDbContext dbContext) : Controller
{
    private readonly ToDoListDbContext _dbContext = dbContext;

    [HttpGet]
    public async Task<IEnumerable<ToDoItem>> GetToDoItems()
    {
        var toDoItems = await _dbContext.ToDoItems.ToListAsync();
        return toDoItems;
    }

    [HttpPut]
    public async Task<int> AddToDoItem(ToDoItem toDoItem)
    {
        _dbContext.ToDoItems.Add(toDoItem);
        await _dbContext.SaveChangesAsync();

        return toDoItem.Id;
    }

    [HttpPost]
    public async Task MoveToDoItem(ToDoItem item)
    {
        _dbContext.ToDoItems.Update(item);
        await _dbContext.SaveChangesAsync();
    }

    [HttpDelete]
    public async Task<IActionResult> DeleteItem(int id)
    {
        var item = await _dbContext.ToDoItems.FirstOrDefaultAsync(x => x.Id == id);
        if (item is null)
            return NotFound();

        _dbContext.ToDoItems.Remove(item);
        await _dbContext.SaveChangesAsync();

        return Ok();
    }
}