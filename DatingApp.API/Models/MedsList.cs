namespace DatingApp.API.Models
{
    public class MedsList
    {
    public int Id { get; set; }
    public string BrandName { get; set; }
	public string GenericName   { get; set; }
	 public string Class  { get; set; }
	 public string Indication   { get; set; }
	 public int FdaApproval  { get; set; }
	 public string OffLabelUse   { get; set; }
	 public int DoseStart   { get; set; }
	 public int DoseMax  { get; set; }
	 public int AgeStart  { get; set; }
	 public int AgeMax   { get; set; }
    }
}