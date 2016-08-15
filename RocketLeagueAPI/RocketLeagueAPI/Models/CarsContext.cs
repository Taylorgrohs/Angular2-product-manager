
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Data.SqlClient;
using static RocketLeagueAPI.Startup;

namespace Cars.Models
{
    public class DB
    {
        public static SqlConnection Connection()
        {
            SqlConnection conn = new SqlConnection(DBConfiguration.ConnectionString);
            return conn;
        }
    }
}
