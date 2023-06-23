package com.paf.mealdrop;

import com.paf.mealdrop.config.AppProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class MealDropApplication {

	public static void main(String[] args) {
		SpringApplication.run(MealDropApplication.class, args);
	}

}
