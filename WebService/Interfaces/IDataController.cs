using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebService.Models;

namespace WebService.Interfaces
{
    public interface IDataController
    {
        IActionResult Get();
        IActionResult Get(int id);
        void Post([FromBody]DataItem item);
        void Put(int id, [FromBody]string value);
        void Delete(int id);
    }
}
