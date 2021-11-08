package newspeed.news;

import java.util.List;

public interface NewsService {
	public String insertNews(News news) throws Exception;
	public List<News> getNewsAllList() throws Exception;
	public String updateNews(News news) throws Exception;
	public String deleteNews(String id) throws Exception;
}
