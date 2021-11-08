package newspeed.com.db;

import java.io.FileInputStream;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

@Service
public class DbFirebaseConfig {
	@PostConstruct
	public void init() {
		try {
			FileInputStream serviceAccount = new FileInputStream(DbConst.FIREBASE_CONFIG_FILE_PATH);
			GoogleCredentials credentials = GoogleCredentials.fromStream(serviceAccount);
			FirebaseOptions options = new FirebaseOptions.Builder()
				.setCredentials(credentials)
				.build();

			FirebaseApp.initializeApp(options);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
