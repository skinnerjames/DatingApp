using Microsoft.EntityFrameworkCore.Migrations;

namespace DatingApp.API.Migrations
{
    public partial class AddedMedsListTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PasswordSalt",
                table: "Users",
                newName: "Passwordsalt");

            migrationBuilder.CreateTable(
                name: "AllMedsList",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    BrandName = table.Column<string>(nullable: true),
                    GenericName = table.Column<string>(nullable: true),
                    Class = table.Column<string>(nullable: true),
                    Indication = table.Column<string>(nullable: true),
                    FdaApproval = table.Column<int>(nullable: false),
                    OffLabelUse = table.Column<string>(nullable: true),
                    DoseStart = table.Column<int>(nullable: false),
                    DoseMax = table.Column<int>(nullable: false),
                    AgeStart = table.Column<int>(nullable: false),
                    AgeMax = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AllMedsList", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AllMedsList");

            migrationBuilder.RenameColumn(
                name: "Passwordsalt",
                table: "Users",
                newName: "PasswordSalt");
        }
    }
}
