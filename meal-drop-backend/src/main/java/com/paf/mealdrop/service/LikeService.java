package com.paf.mealdrop.service;

import com.paf.mealdrop.model.Like;

public interface LikeService {
    void addLike(Like like);

    void removeLikeById(String likeId);
}
