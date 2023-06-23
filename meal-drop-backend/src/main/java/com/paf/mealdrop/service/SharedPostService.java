package com.paf.mealdrop.service;

import com.paf.mealdrop.model.SharedPost;

import java.util.List;
import java.util.Optional;

public interface SharedPostService {
    List<SharedPost> getAllSharedPosts();

    Optional<SharedPost> getSharedPostById(String id);

    SharedPost createSharedPost(SharedPost sharedPost);

    SharedPost updateSharedPost(String id, SharedPost sharedPost);

    void deleteSharedPost(String id);
}
