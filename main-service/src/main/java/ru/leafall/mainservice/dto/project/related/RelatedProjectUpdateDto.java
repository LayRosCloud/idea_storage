package ru.leafall.mainservice.dto.project.related;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class RelatedProjectUpdateDto {
    @NotBlank
    @Length(min = 1, max = 40)
    private String name;

    @NotBlank
    @Length(min = 1, max = 255)
    private String link;

    @NotBlank
    @Length(min = 1, max = 500)
    private String strongSide;

    private Boolean isModerated;

    @NotBlank
    @Length(min = 1, max = 500)
    private String weakSide;
}
