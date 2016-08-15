using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(RocketLeagueAPI.Startup))]

namespace RocketLeagueAPI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        { 
            ConfigureAuth(app);
        }
        public static class DBConfiguration
        {
            public static string ConnectionString = "Data Source=DESKTOP-6AP341A\\SQLEXPRESS;Database=Cars_db; User Id=Guest; Password=Password";
        }
    }
}
