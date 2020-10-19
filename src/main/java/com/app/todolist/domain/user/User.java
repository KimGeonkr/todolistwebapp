package com.app.todolist.domain.user;

import com.app.todolist.domain.util.BaseEntity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class User extends BaseEntity {

  @Id //기본키
  @GeneratedValue(strategy = GenerationType.IDENTITY) //자동 증가 값
  private Long userId;
  private String nickname;
  private String email;

  public User(String nickname, String email) {
    this.nickname = nickname;
    this.email = email;
  }

  public void updateNickname(String nickname){
    this.nickname = nickname;
  }

}
