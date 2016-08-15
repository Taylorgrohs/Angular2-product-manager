
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlClient;

namespace Cars.Models
{
    public class Car
    {
        public int carId { get; set; }
        public string carName { get; set; }
        public string description { get; set; }
        public string imageUrl { get; set; }
        public string imageUrl1 { get; set; }
        public float noBoost { get; set; }
        public float boost { get; set; }
        public float total { get; set; }
        public float length { get; set; }
        public float width { get; set; }
        public float height { get; set; }
        public float surface { get; set; }

        public Car(int id, string name, string Description, string imageurl, string imageurl1, float noboost, float Boost, float Total, float Length, float Width, float Height, float Surface)
        {
            this.carId = id;
            this.carName = name;
            this.description = Description;
            this.imageUrl = imageurl;
            this.imageUrl1 = imageurl1;
            this.noBoost = noboost;
            this.boost = Boost;
            this.total = Total;
            this.length = Length;
            this.width = Width;
            this.height = Height;
            this.surface = Surface;

        }

        public static List<Car> GetAll()
        {
            List<Car> allCars = new List<Car> { };

            SqlConnection conn = DB.Connection();
            SqlDataReader rdr = null;
            conn.Open();

            SqlCommand cmd = new SqlCommand("SELECT * FROM Cars;", conn);
            rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {


                int id = rdr.GetInt32(0);
                string carName = rdr.GetString(1);
                string description = rdr.GetString(2);
                string imageUrl = rdr.GetString(3);
                string imageUrl1 = rdr.GetString(4);
                float noBoost = (float) rdr.GetDouble(5);
                float boost = (float) rdr.GetDouble(6);
                float total = (float) rdr.GetDouble(7);
                float length = (float) rdr.GetDouble(8);
                float width = (float) rdr.GetDouble(9);
                float height = (float) rdr.GetDouble(10);
                float surface = (float) rdr.GetDouble(11);
                Car newCar = new Car(id, carName, description, imageUrl, imageUrl1, noBoost, boost, total, length, width, height, surface);
                allCars.Add(newCar);
            }
            if (rdr != null)
            {
                rdr.Close();
            }
            if (conn != null)
            {
                conn.Close();
            }

            return allCars;
        }

    }
}