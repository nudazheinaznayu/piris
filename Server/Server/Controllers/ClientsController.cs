using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Server.Data;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private PirisContext _context;
        // GET api/values
        public ClientsController(PirisContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Client>> GetClients()
        {
            return _context.Clients.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Client> GetClient(int id)
        {
            return _context.Clients.First(c => c.Id == id);
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> AddClient([FromBody] Client client)
        {
            var errors = CheckForUnique(client);
            if (errors == "")
            {
                if (client.Id == 0)
                {
                    _context.Clients.Add(client);
                }
                else
                {
                    var original = _context.Clients.FirstOrDefault(c => c.Id == client.Id);     

                    _context.Clients.Attach(client);
                }
                await _context.SaveChangesAsync();  
            }
            return Ok(new AddUserResponse()
             {
                 Error = errors
             });
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void DeleteClient(int id)
        {
            var deletedUser = _context.Clients.First(c => c.Id == id);
            _context.Clients.Remove(deletedUser);
            _context.SaveChanges();
        }

        private string CheckForUnique(Client client)
        {
            var error = "";
            var originalClient = _context.Clients.FirstOrDefault(c => c.Id == client.Id);
            var isPassportIdUnique = originalClient !=null? !_context.Clients.Any(c => c.PassportId == client.PassportId 
                                                                && c.PassportId != originalClient.PassportId):
                    !_context.Clients.Any(c => c.PassportId == client.PassportId);
            if (!isPassportIdUnique)
            {
                error += "Клиент с таким идентификационным номером существует.\n";
            }

            var isPassportUnique = originalClient != null ? !_context.Clients.Any(c => (c.PassportNumber == client.PassportNumber
                                                              && c.PassportSeries == client.PassportSeries) &&
                                                              (c.PassportNumber != originalClient.PassportNumber
                                                               && c.PassportSeries != originalClient.PassportSeries)):
                !_context.Clients.Any(c => (c.PassportNumber == client.PassportNumber
                                            && c.PassportSeries == client.PassportSeries));
            if (!isPassportUnique)
            {
                error += "Клиент с таким паспортом существует.\n";
            }

            if (originalClient == null)
            {
                var isClientUnique = !_context.Clients.Any(c => c.Pensioner == client.Pensioner &&
                                                                c.PassportId == client.PassportId &&
                                                                c.PassportNumber == client.PassportNumber &&
                                                                c.PassportSeries == client.PassportSeries &&
                                                                c.AddressOfRegistration ==
                                                                client.AddressOfRegistration &&
                                                                c.AddressOfResidence == client.AddressOfRegistration &&
                                                                c.Authority == client.Authority &&
                                                                c.Birthdate == client.Birthdate &&
                                                                c.CityOfRegistration == client.CityOfRegistration &&
                                                                c.CityOfResidence == client.CityOfResidence &&
                                                                c.DateOfIssue == client.DateOfIssue &&
                                                                c.Disability == client.Disability &&
                                                                c.Email == client.Email &&
                                                                c.HomePhone == client.HomePhone &&
                                                                c.JobPlace == client.JobPlace &&
                                                                c.Nationality == client.MaritalStatus &&
                                                                c.MobilePhone == client.MobilePhone &&
                                                                c.Name == client.Name &&
                                                                c.Surname == client.Surname &&
                                                                c.Patronymic == client.Patronymic &&
                                                                c.PlaceOfBirth == client.PlaceOfBirth &&
                                                                c.MaritalStatus == client.MaritalStatus);
                if (!isClientUnique)
                {
                    error += "Клиент с такими данными сущестует.";
                }
            }

            return error;
        }
    }

    class AddUserResponse
    {
        public string Error { get; set; }
    }
}
