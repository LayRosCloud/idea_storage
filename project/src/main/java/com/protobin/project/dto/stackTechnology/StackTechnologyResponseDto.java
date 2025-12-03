package com.protobin.project.dto.stackTechnology;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
@Schema(title = "Создание стэка",
        description = "Поля необходимые для создания")
public class StackTechnologyResponseDto {

    @Schema(description = "Идентификатор технологии стэка", example = "3d5f1a26-c554-4bfe-811a-0e9ef2ed52fc")
    private UUID id;

    @Schema(description = "Название технологии стэка", example = "Hibernate")
    private String name;
}
