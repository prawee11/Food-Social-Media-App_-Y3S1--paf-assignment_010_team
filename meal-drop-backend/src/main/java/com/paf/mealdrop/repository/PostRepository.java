package com.paf.mealdrop.repository;

import com.paf.mealdrop.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends MongoRepository<Post, String> {
}
