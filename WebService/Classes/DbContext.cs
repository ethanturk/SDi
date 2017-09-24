using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using WebService.Models;

namespace WebService.Classes
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        { }

        public DataContext() { }

        public DbSet<DataItem> Items { get; set; }
    }
}
