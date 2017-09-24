using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebService.Services;
using WebService.Classes;
using WebService.Models;
using WebService.Interfaces;

namespace WebService.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller, Interfaces.IDataController
    {
        private DataService dataSvc;
        public DataController(DataContext dbCxt)
        {
            dataSvc = new DataService(dbCxt);
        }

        // GET api/data
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(dataSvc.Get());
            }
            catch (Exception ex)
            {
                //Log this message using NLog, AppInsights or similar
                return BadRequest(ex.Message);
            }
        }

        // GET api/data/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            if (id <= 0) { throw new ArgumentException("You must supply a valid ID."); }

            try
            {
                return Ok(dataSvc.Get(id));
            }
            catch (Exception ex)
            {
                //Log this message using NLog, AppInsights or similar
                return BadRequest(ex.Message);
            }
        }

        // POST api/data
        [HttpPost]
        public void Post([FromBody]DataItem item)
        {
            if (item == null) { throw new ArgumentException("You must supply a valid model."); }

            try
            {
                Ok(dataSvc.InsertAsync(item));
            }
            catch (Exception ex)
            {
                //Log this message using NLog, AppInsights or similar
            }
        }

        // PUT api/data/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
            throw new NotImplementedException();
        }

        // DELETE api/data/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}
