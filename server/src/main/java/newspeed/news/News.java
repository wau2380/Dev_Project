package newspeed.news;

import java.util.ArrayList;

public class News {
	private String id = "";
	private String company = "";
	private String date = "";
	private String journal = "";
	private String newsUrl = "";
	private ArrayList<String> photoUrl = new ArrayList<>();
	private String title = "";

	public News(String id, String company, String date, String journal, String newsUrl, ArrayList<String> photoUrl,
		String title) {
		this.id = id;
		this.company = company;
		this.date = date;
		this.journal = journal;
		this.newsUrl = newsUrl;
		this.photoUrl = photoUrl;
		this.title = title;
	}

	public News() {

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

	public ArrayList<String> getPhotoUrl() {
		return photoUrl;
	}

	public void setPhotoUrl(ArrayList<String> photoUrl) {
		this.photoUrl = photoUrl;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@Override
	public String toString() {
		return "{" +
			"id='" + id + '\'' +
			", company='" + company + '\'' +
			", date='" + date + '\'' +
			", journal='" + journal + '\'' +
			", newsUrl='" + newsUrl + '\'' +
			", photoUrl=" + photoUrl +
			", title='" + title + '\'' +
			'}';
	}
}
