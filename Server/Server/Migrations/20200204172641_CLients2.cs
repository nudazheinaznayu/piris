using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class CLients2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Surname = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Patronymic = table.Column<string>(nullable: true),
                    Birthdate = table.Column<DateTime>(nullable: false),
                    PassportNumber = table.Column<string>(nullable: true),
                    PassportSeries = table.Column<string>(nullable: true),
                    Authority = table.Column<string>(nullable: true),
                    DateOfIssue = table.Column<DateTime>(nullable: false),
                    PassportId = table.Column<string>(nullable: true),
                    PlaceOfBirth = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    HomePhone = table.Column<string>(nullable: true),
                    MobilePhone = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    JobPlace = table.Column<string>(nullable: true),
                    Position = table.Column<string>(nullable: true),
                    PlaceOfResidence = table.Column<string>(nullable: true),
                    MaritalStatus = table.Column<string>(nullable: true),
                    Nationality = table.Column<string>(nullable: true),
                    Disability = table.Column<string>(nullable: true),
                    Pensioner = table.Column<bool>(nullable: false),
                    Salary = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Clients");
        }
    }
}
