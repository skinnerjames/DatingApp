using System.Linq;
using Microsoft.AspNetCore.Mvc;
using DatingApp.API.Data;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace DatingApp.API.Controllers
{
 [Route("api/[controller]")]
    [ApiController]

    public class MedsListController : ControllerBase
    {
        private readonly DataContext _context;
        public MedsListController(DataContext context)
        {
            _context = context;

        }

        // GET api/medications
        [HttpGet]
        public async Task<IActionResult> GetAllMedsList()
        {
            var medslist = await _context.AllMedsList.ToListAsync();
            return Ok(medslist);
        }
        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMedsList(int id)
        {
           var medslist = await _context.AllMedsList.FirstOrDefaultAsync(x => x.Id == id);
           return Ok(medslist);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}