package newspeed.config.auth;


import lombok.RequiredArgsConstructor;
import newspeed.domain.user.Role;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final CustomOAuth2UserService customOAuth2UserService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // h2-console 화면을 사용하기 위한 코드
        http.csrf().disable().headers().frameOptions().disable()
                // URL 별 권한 관리를 설정하는 옵션의 시작점
                .and().authorizeRequests()
                // 권한과 관계없이 모든 것을 허용하는 URL
                .antMatchers("/","/css/**","/images/**","/js/**").permitAll()
                // /api/v1 에 해당하는 기능은 user 의 경우만 접근할 수 있도록 하는 코드
                .antMatchers("/api/v1/**").hasRole(Role.USER.name())
                // 설정되지 않은 URL 의 경우 인증된 사용자들에게만 허용
                .anyRequest().authenticated()
                // 로그아웃 설정의 진입점 , 로그아웃이 성공할 경우 메인페이지로 이동
                .and().logout().logoutSuccessUrl("/")
                // 로그인 성공 후 사용자 정보를 가져올 때 설정
               .and().oauth2Login().userInfoEndpoint().userService(customOAuth2UserService);
    }
}
