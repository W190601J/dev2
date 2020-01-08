package com.example.dplayervideo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.dplayervideo.*.*.mapper")
public class DplayervideoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DplayervideoApplication.class, args);
    }

}
