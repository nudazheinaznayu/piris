using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Data
{
    public class PirisContext: DbContext
    {
        public DbSet<Client> Clients { get; set; }

        public DbSet<Сity> Cities { get; set; }

        public DbSet<Nationality> Nationalities { get; set; }

        public PirisContext(DbContextOptions options) : base(options)
        {
        }
    }
}
