package newspeed.news;

import static com.google.cloud.firestore.Query.*;

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
public class NewsServiceImpl implements NewsService{

	static Firestore db;

	@PostConstruct
	public void init() throws Exception {
		db = FirestoreClient.getFirestore();
	}

	@Override
	public String getNewsAllList() throws Exception {
		ApiFuture<QuerySnapshot> future = db.collection(NewsConst.COLLECTION_NAME).get();
		List<QueryDocumentSnapshot> documents = future.get().getDocuments();
		String jsonResult = makeJsonResult(documents);
		return jsonResult;
	}

	@Override
	public String getNewsInOrder(String order, String direction) throws Exception {
		Direction selectDirection = direction.equals("asc") ? Direction.ASCENDING : Direction.DESCENDING;
		ApiFuture<QuerySnapshot> future = db.collection(NewsConst.COLLECTION_NAME).orderBy(order, selectDirection).get();
		List<QueryDocumentSnapshot> documents = future.get().getDocuments();
		return makeJsonResult(documents);
	}

	@Override
	public String getNewsWhere(String where, String keyword) throws Exception {
		ApiFuture<QuerySnapshot> future = db.collection(NewsConst.COLLECTION_NAME).whereEqualTo(where, keyword).get();
		List<QueryDocumentSnapshot> documents = future.get().getDocuments();
		return makeJsonResult(documents);
	}

	private String makeJsonResult(List<QueryDocumentSnapshot> documents) {
		JsonArray jsonArray = new JsonArray();
		for (QueryDocumentSnapshot document : documents) {
			News news = document.toObject(News.class);
			news.setId(document.getId());
			Gson gson = new Gson();
			String jsonString = gson.toJson(news);
			JsonParser parser = new JsonParser();
			JsonObject jsonObject = (JsonObject)parser.parse(jsonString);
			jsonArray.add(jsonObject);
		}
		return jsonArray.toString();
	}
}
