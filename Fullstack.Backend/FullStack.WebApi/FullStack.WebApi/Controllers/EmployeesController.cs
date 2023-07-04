using FullStack.WebApi.Data;
using FullStack.WebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStack.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly FullStackDbContext _fullStackDbContext;
        public EmployeesController(FullStackDbContext fullStackDbContext)
        {
            _fullStackDbContext = fullStackDbContext;
        }


        [HttpGet]
        public async Task<IActionResult> GetListAsync()
        {
            var result = await _fullStackDbContext.Employees.ToListAsync();
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync(Employee employee)
        {
            employee.Id = new Guid();
            await _fullStackDbContext.Employees.AddAsync(employee);
            await _fullStackDbContext.SaveChangesAsync();
            return Ok(employee);
        }
    }
}
