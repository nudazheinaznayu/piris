using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class changeClient : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PlaceOfResidence",
                table: "Clients",
                newName: "CityOfResidence");

            migrationBuilder.RenameColumn(
                name: "City",
                table: "Clients",
                newName: "CityOfRegistration");

            migrationBuilder.AddColumn<string>(
                name: "AddressOfRegistration",
                table: "Clients",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "AddressOfResidence",
                table: "Clients",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AddressOfRegistration",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "AddressOfResidence",
                table: "Clients");

            migrationBuilder.RenameColumn(
                name: "CityOfResidence",
                table: "Clients",
                newName: "PlaceOfResidence");

            migrationBuilder.RenameColumn(
                name: "CityOfRegistration",
                table: "Clients",
                newName: "City");
        }
    }
}
