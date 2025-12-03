package com.protobin.project.dto.project;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
@Schema(title = "Поиск проектов",
        description = "Объект для запроса на поиск проектов")
public class ProjectsSearchDto {

    private List<String> tagNames;
    private List<String> stackNames;
}
