package com.paf.mealdrop.repository;

import com.paf.mealdrop.model.SharedPost;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SharedPostRepository extends MongoRepository<SharedPost, String> {
}
