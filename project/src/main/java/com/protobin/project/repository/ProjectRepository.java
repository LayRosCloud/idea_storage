package com.protobin.project.repository;

import com.protobin.project.entity.ProjectEntity;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.UUID;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectEntity, UUID> {

    @Query(
            value = """
            select p.*
            from projects p
            join tags t on t.project_id = p.id
            where lower(t.name) in :tags
            and p.deleted_at IS NULL
            group by p.id
            order by count(distinct lower(t.name)) desc
            """,
            countQuery = """
            select count(distinct p.id)
            from projects p
            join tags t on t.project_id = p.id
            where lower(t.name) in :tags
            and p.deleted_at IS NULL
            """,
            nativeQuery = true)
    Page<ProjectEntity> findAllByTagsIgnoreCase(@Param("tags") Collection<String> tags,
                                                Pageable pageable);
}
