package newspeed.news;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NewsController {
	@Autowired
	NewsService newsService;

	@GetMapping("/news/insertNews")
	public String insertNews(@RequestParam News news) throws Exception {
		return newsService.insertNews(news);
	}

	@GetMapping("/news/getNewsAllList")
	public List<News> getNewsAllList() throws Exception {
		return newsService.getNewsAllList();
	}

	@GetMapping("/news/updateNews")
	public String updateNews(@RequestParam News news) throws Exception {
		return newsService.updateNews(news);
	}

	@GetMapping("/news/deleteNews")
	public String deleteNews(@RequestParam String id) throws Exception {
		return newsService.deleteNews(id);
	}
}
