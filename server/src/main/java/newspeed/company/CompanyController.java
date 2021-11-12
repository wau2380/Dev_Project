package newspeed.company;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CompanyController {
	@Autowired
	CompanyService companyService;

	@GetMapping("/company/get")
	public String getCompanyAllList() throws Exception {
		return companyService.getCompanyAllList();
	}
}
