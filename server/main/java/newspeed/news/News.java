package newspeed.news;

public class News {
	private String id;
	private String company;
	private String date;
	private String journal;
	private String newsUrl;
	private String photoUrl;
	private String title;

	public News(String id, String company, String date, String journal, String newsUrl, String photoUrl,
		String title) {
		this.id = id;
		this.company = company;
		this.date = date;
		this.journal = journal;
		this.newsUrl = newsUrl;
		this.photoUrl = photoUrl;
		this.title = title;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getJournal() {
		return journal;
	}

	public void setJournal(String journal) {
		this.journal = journal;
	}

	public String getNewsUrl() {
		return newsUrl;
	}

	public void setNewsUrl(String newsUrl) {
		this.newsUrl = newsUrl;
	}

	public String getPhotoUrl() {
		return photoUrl;
	}

	public void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
}
