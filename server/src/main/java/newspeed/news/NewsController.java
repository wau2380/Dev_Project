package newspeed.news;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NewsController {
	@Autowired
	NewsService newsService;

	@GetMapping("/news/get")
	public String getNewsAllList() throws Exception {
		return newsService.getNewsAllList();
	}

	@GetMapping("/news/get/1/{order}/{direction}")
	public String getNewsInOrder(@PathVariable("order") String order, @PathVariable("direction") String direction) throws Exception {
		return newsService.getNewsInOrder(order, direction);
	}

	@GetMapping("/news/get/2/{where}/{keyword}")
	public String getNewsWhere(@PathVariable("where") String where, @PathVariable("keyword") String keyword) throws Exception {
		return newsService.getNewsWhere(where, keyword);
	}
}
