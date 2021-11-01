package newspeed.news;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.firebase.cloud.FirestoreClient;

@Service
public class NewsServiceImpl implements NewsService{

	@Override
	public String insertNews(News news) throws Exception {
		return null;
	}

	@Override
	public List<News> getNewsAllList() throws Exception {
		List<News> newsList = new ArrayList<>();
		Firestore db = FirestoreClient.getFirestore();
		ApiFuture<QuerySnapshot> future = db.collection(NewsConst.COLLECTION_NAME).get();
		List<QueryDocumentSnapshot> documents = future.get().getDocuments();
		for (QueryDocumentSnapshot document : documents) {
			// TODO: 2021-10-08 DB 객체에 추가하기 (현재 오류 발생)
			// newsList.add(document.toObject(News.class));
			System.out.println(document.getId());
		}

		return newsList;
	}

	@Override
	public String updateNews(News news) throws Exception {
		return null;
	}

	@Override
	public String deleteNews(String id) throws Exception {
		return null;
	}
}
