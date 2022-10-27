package com.wipro.velocity.exam.model;

import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class Questions {
    private String examId;
    private String question;
    private List<String> options;
    private Integer answer;
    
    
}