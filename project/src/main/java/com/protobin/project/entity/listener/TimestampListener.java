package com.protobin.project.entity.listener;

import com.protobin.project.entity.aware.CreatedAtTimestampAware;
import com.protobin.project.entity.aware.UpdateAtTimestampAware;
import jakarta.persistence.PrePersist;
import org.springframework.stereotype.Component;

import java.time.Instant;

@Component
public class TimestampListener {

    @PrePersist
    private void beforeSave(Object object) {
        if (object instanceof CreatedAtTimestampAware) {
            ((CreatedAtTimestampAware)object).setCreatedAt(Instant.now().toEpochMilli());
        }
        if (object instanceof UpdateAtTimestampAware) {
            ((UpdateAtTimestampAware)object).setUpdatedAt(Instant.now().toEpochMilli());
        }
    }
}
