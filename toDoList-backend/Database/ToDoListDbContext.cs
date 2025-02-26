using Microsoft.EntityFrameworkCore;
using ToDoList.Backend.Entity;

namespace ToDoList.Backend.Database;

public class ToDoListDbContext(DbContextOptions<ToDoListDbContext> options) : DbContext(options)
{
    public DbSet<ToDoItem> ToDoItems { get; set; } = null!;
}