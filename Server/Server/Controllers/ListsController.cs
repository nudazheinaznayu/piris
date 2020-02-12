using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Server.Data;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ListsController : ControllerBase
    {
        private PirisContext pirisContext;

        public ListsController(PirisContext pirisContext)
        {
            this.pirisContext = pirisContext;
        }
        // GET: api/Lists
        [HttpGet("cities")]
        public IEnumerable<Сity> GetCities()
        {
            return pirisContext.Cities;
        }

        [HttpGet("Nationalities")]
        public IEnumerable<Nationality> GetNationalities()
        {
            return pirisContext.Nationalities;
        }
    }
}
