package com.jarkims.catalog.repository;

import com.jarkims.catalog.model.LeatherItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeatherItemRepository extends JpaRepository<LeatherItem, Long> {
}
