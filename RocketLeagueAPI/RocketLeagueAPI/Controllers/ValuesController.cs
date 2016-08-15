using Cars.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RocketLeagueAPI.Controllers
{
    [Authorize]
    [AllowAnonymous]
    public class ValuesController : ApiController
    {
        private DB db = new DB();
        // GET api/values
        public IEnumerable<object> Get()
        {
            List<Car> allCars = Car.GetAll();
            return allCars ;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
