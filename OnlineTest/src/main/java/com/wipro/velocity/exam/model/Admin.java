package com.wipro.velocity.exam.model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Admin {
    private String question;
    private String examId;
    private List<String> options;
    private Integer answer;
}