package newspeed.company;

public class Company {
	private String id = "";
	private String name = "";
	private String logoPath = "";

	public Company(String id, String name, String logoPath) {
		this.id = id;
		this.name = name;
		this.logoPath = logoPath;
	}

	public Company() {
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLogoPath() {
		return logoPath;
	}

	public void setLogoPath(String logoPath) {
		this.logoPath = logoPath;
	}

	@Override
	public String toString() {
		return "{" +
			"id='" + id + '\'' +
			", name='" + name + '\'' +
			", logoPath='" + logoPath + '\'' +
			'}';
	}
}
