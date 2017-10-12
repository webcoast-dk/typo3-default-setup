lib.content.main = CONTENT
lib.content.main {
    table = tt_content
    select {
        where = colPos=0
        orderBy = sorting
    }
    languageField = sys_language_uid
    renderObj = COA
    renderObj {
        10 = LOAD_REGISTER

        20 =< tt_content

        100 = RESTORE_REGISTER
    }
}

lib.contentElement {
    templateRootPaths.10 = EXT:typo3_base_setup/Resources/Private/Templates/Content
    partialRootPaths.10 = EXT:typo3_base_setup/Resources/Private/Partials/Content
    partialRootPaths.11 = EXT:typo3_base_setup/Resources/Private/Partials
    layoutRootPaths.10 = EXT:typo3_base_setup/Resources/Private/Layouts/Content

    variables {
        cObjNumber = TEXT
        cObjNumber.data = cObj:parentRecordNumber

        disableHeaderLink = TEXT
        disableHeaderLink.value = 1
        
        defaultFirstHeaderLayout = TEXT
        defaultFirstHeaderLayout.data = register:defaultFirstHeaderLayout 

        defaultHeaderLayout = TEXT
        defaultHeaderLayout.data = register:defaultHeaderLayout

        imageWidth = TEXT
        imageWidth.data = register:imageWidth
    }
}

<INCLUDE_TYPOSCRIPT: source="DIR:EXT:typo3_base_setup/Configuration/TypoScript/Base/Includes/Content" extensions="ts">
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:typo3_base_setup/Configuration/TypoScript/Base/Includes/Extensions" extensions="ts">
