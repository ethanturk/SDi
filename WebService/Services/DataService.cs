using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebService.Classes;
using WebService.Models;

namespace WebService.Services
{
    public class DataService : IDisposable
    {
        private DataContext dbCxt;

        public DataService(DataContext _dbCxt)
        {
            dbCxt = _dbCxt;
        }

        public DataItem Get(int id)
        {
            if (id <= 0) { throw new ArgumentException("Invalid ID provided."); }

            return dbCxt.Items.First(i => i.Id == id);
        }

        public List<DataItem> Get()
        {
            return dbCxt.Items.ToList();
        }

        public async Task<bool> InsertAsync(DataItem item)
        {
            dbCxt.Items.Add(item);
            return (await dbCxt.SaveChangesAsync()) == 1;
        }

        public void Dispose()
        {
            dbCxt.Dispose();
        }
    }
}
