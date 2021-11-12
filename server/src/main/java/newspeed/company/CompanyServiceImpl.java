package newspeed.company;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.firebase.cloud.FirestoreClient;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

@Service
public class CompanyServiceImpl implements CompanyService{

	static Firestore db;

	@PostConstruct
	public void init() throws Exception {
		db = FirestoreClient.getFirestore();
	}

	@Override
	public String getCompanyAllList() throws Exception {
		ApiFuture<QuerySnapshot> future = db.collection(CompanyConst.COLLECTION_NAME).get();
		List<QueryDocumentSnapshot> documents = future.get().getDocuments();
		return makeJsonResult(documents);
	}

	private String makeJsonResult(List<QueryDocumentSnapshot> documents) {
		JsonArray jsonArray = new JsonArray();
		for (QueryDocumentSnapshot document : documents) {
			Company company = document.toObject(Company.class);
			company.setId(document.getId());
			Gson gson = new Gson();
			String jsonString = gson.toJson(company);
			JsonParser parser = new JsonParser();
			JsonObject jsonObject = (JsonObject)parser.parse(jsonString);
			jsonArray.add(jsonObject);
		}
		return jsonArray.toString();
	}
}
