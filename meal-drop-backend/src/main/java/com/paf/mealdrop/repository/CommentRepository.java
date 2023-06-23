package com.paf.mealdrop.repository;

import java.util.List;

import com.paf.mealdrop.model.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CommentRepository extends MongoRepository<Comment, String> {

    List<Comment> findByPostId(String postId);

    List<Comment> findByUserId(String userId);

    Comment findByIdAndUserId(String id, String userId);

    Comment findByPostIdAndUserId(String postId, String userId);
}
