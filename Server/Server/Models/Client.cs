using System;
using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class Client
    {
        public int Id { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Patronymic { get; set; }
        [Required]
        public DateTime Birthdate { get; set; }
        [Required]
        public string PassportNumber { get; set; }
        [Required]
        public string PassportSeries { get; set; }
        [Required]
        public string Authority { get; set; }
        [Required]
        public DateTime DateOfIssue { get; set; }
        [Required]
        public string PassportId { get; set; }
        [Required]
        public string PlaceOfBirth { get; set; }
        [Required]
        public string CityOfResidence { get; set; }
        [Required]
        public string AddressOfResidence { get; set; }
        [Phone]
        public string HomePhone { get; set; }
        [Phone]
        public string MobilePhone { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        public string JobPlace { get; set; }
        public string Position { get; set; }
        [Required]
        public string CityOfRegistration { get; set; }
        [Required]
        public string AddressOfRegistration { get; set; }
        [Required]
        public string MaritalStatus { get; set; }
        [Required]
        public string Nationality { get; set; }
        [Required]
        public string Disability { get; set; }
        [Required]
        public bool Pensioner { get; set; }
        public double Salary { get; set; }

    }
}
