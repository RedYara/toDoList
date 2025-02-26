using ToDoList.Backend.Enum;

namespace ToDoList.Backend.Entity;

public class ToDoItem
{
    public int Id { get; set; }
    public string Title { get; set; } = null!;
    public bool IsDone { get; set; }
    public int DashboardId { get; set; }
    public DateTime CreatedAt { get; set; }

}