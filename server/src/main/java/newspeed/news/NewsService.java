package newspeed.news;

public interface NewsService {
	public String getNewsAllList() throws Exception;
	public String getNewsInOrder(String order, String direction) throws Exception;
	public String getNewsWhere(String where, String keyword) throws Exception;
}
