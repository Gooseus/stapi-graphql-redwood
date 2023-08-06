export const schema = gql`
  type Query {
    """
    Pagination over animals

    Equivalent to GET /v1/rest/animal/search
    """
    animalBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): AnimalBaseResponse @skipAuth

    """
    Retrieval of a single animal

    Equivalent to GET /v1/rest/animal
    """
    animalFullResponse(
      """
      Animal unique ID
      """
      uid: String!
    ): AnimalFullResponse @skipAuth

    """
    Pagination over astronomical objects

    Equivalent to GET /v1/rest/astronomicalObject/search
    """
    astronomicalObjectBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): AstronomicalObjectBaseResponse @skipAuth

    """
    Retrieval of a single astronomical object

    Equivalent to GET /v1/rest/astronomicalObject
    """
    astronomicalObjectFullResponse(
      """
      Astronomical object's unique ID
      """
      uid: String!
    ): AstronomicalObjectFullResponse @skipAuth

    """
    Pagination over astronomical objects (V2)

    Equivalent to GET /v2/rest/astronomicalObject/search
    """
    astronomicalObjectV2BaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): AstronomicalObjectV2BaseResponse @skipAuth

    """
    Retrieval of a single astronomical object (V2)

    Equivalent to GET /v2/rest/astronomicalObject
    """
    astronomicalObjectV2FullResponse(
      """
      Astronomical object's unique ID
      """
      uid: String!
    ): AstronomicalObjectV2FullResponse @skipAuth

    """
    Pagination over books

    Equivalent to GET /v1/rest/book/search
    """
    bookBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): BookBaseResponse @skipAuth

    """
    Pagination over book collections

    Equivalent to GET /v1/rest/bookCollection/search
    """
    bookCollectionBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): BookCollectionBaseResponse @skipAuth

    """
    Retrieval of a single book collection

    Equivalent to GET /v1/rest/bookCollection
    """
    bookCollectionFullResponse(
      """
      Book collection unique ID
      """
      uid: String!
    ): BookCollectionFullResponse @skipAuth

    """
    Retrieval of a single book

    Equivalent to GET /v1/rest/book
    """
    bookFullResponse(
      """
      Book unique ID
      """
      uid: String!
    ): BookFullResponse @skipAuth

    """
    Pagination over book series

    Equivalent to GET /v1/rest/bookSeries/search
    """
    bookSeriesBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): BookSeriesBaseResponse @skipAuth

    """
    Retrieval of a single book series

    Equivalent to GET /v1/rest/bookSeries
    """
    bookSeriesFullResponse(
      """
      Book series unique ID
      """
      uid: String!
    ): BookSeriesFullResponse @skipAuth

    """
    Pagination over books (V2)

    Equivalent to GET /v2/rest/book/search
    """
    bookV2BaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): BookV2BaseResponse @skipAuth

    """
    Retrieval of a single book (V2)

    Equivalent to GET /v2/rest/book
    """
    bookV2FullResponse(
      """
      Book unique ID
      """
      uid: String!
    ): BookV2FullResponse @skipAuth

    """
    Pagination over characters

    Equivalent to GET /v1/rest/character/search
    """
    characterBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): CharacterBaseResponse @skipAuth

    """
    Retrieval of a single character

    Equivalent to GET /v1/rest/character
    """
    characterFullResponse(
      """
      Character unique ID
      """
      uid: String!
    ): CharacterFullResponse @skipAuth

    """
    Pagination over comic collections

    Equivalent to GET /v1/rest/comicCollection/search
    """
    comicCollectionBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): ComicCollectionBaseResponse @skipAuth

    """
    Retrieval of a single comic collection

    Equivalent to GET /v1/rest/comicCollection
    """
    comicCollectionFullResponse(
      """
      Comic collection unique ID
      """
      uid: String!
    ): ComicCollectionFullResponse @skipAuth

    """
    Retrieval of a single comic collection (V2)

    Equivalent to GET /v2/rest/comicCollection
    """
    comicCollectionV2FullResponse(
      """
      Comic collection unique ID
      """
      uid: String!
    ): ComicCollectionV2FullResponse @skipAuth

    """
    Pagination over comic series

    Equivalent to GET /v1/rest/comicSeries/search
    """
    comicSeriesBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): ComicSeriesBaseResponse @skipAuth

    """
    Retrieval of a single comic series

    Equivalent to GET /v1/rest/comicSeries
    """
    comicSeriesFullResponse(
      """
      Comic series unique ID
      """
      uid: String!
    ): ComicSeriesFullResponse @skipAuth

    """
    Pagination over comic strips

    Equivalent to GET /v1/rest/comicStrip/search
    """
    comicStripBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): ComicStripBaseResponse @skipAuth

    """
    Retrieval of a single comic strip

    Equivalent to GET /v1/rest/comicStrip
    """
    comicStripFullResponse(
      """
      Comic strip unique ID
      """
      uid: String!
    ): ComicStripFullResponse @skipAuth

    """
    Pagination over comics

    Equivalent to GET /v1/rest/comics/search
    """
    comicsBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): ComicsBaseResponse @skipAuth

    """
    Retrieval of a single comics

    Equivalent to GET /v1/rest/comics
    """
    comicsFullResponse(
      """
      Comics unique ID
      """
      uid: String!
    ): ComicsFullResponse @skipAuth

    """
    Pagination over companies

    Equivalent to GET /v1/rest/company/search
    """
    companyBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): CompanyBaseResponse @skipAuth

    """
    Retrieval of a single company

    Equivalent to GET /v1/rest/company
    """
    companyFullResponse(
      """
      Company unique ID
      """
      uid: String!
    ): CompanyFullResponse @skipAuth

    """
    Pagination over companies (V2)

    Equivalent to GET /v2/rest/company/search
    """
    companyV2BaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): CompanyV2BaseResponse @skipAuth

    """
    Retrieval of a single company (V2)

    Equivalent to GET /v2/rest/company
    """
    companyV2FullResponse(
      """
      Company unique ID
      """
      uid: String!
    ): CompanyV2FullResponse @skipAuth

    """
    Pagination over conflicts

    Equivalent to GET /v1/rest/conflict/search
    """
    conflictBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): ConflictBaseResponse @skipAuth

    """
    Retrieval of a single conflict

    Equivalent to GET /v1/rest/conflict
    """
    conflictFullResponse(
      """
      Conflict unique ID
      """
      uid: String!
    ): ConflictFullResponse @skipAuth

    """
    Retrieval of a single conflict (V2)

    Equivalent to GET /v2/rest/conflict
    """
    conflictV2FullResponse(
      """
      Conflict unique ID
      """
      uid: String!
    ): ConflictV2FullResponse @skipAuth

    """
    Retrieval of a data version

    Equivalent to GET /v1/rest/common/dataVersion
    """
    dataVersion: DataVersion @skipAuth

    """
    Pagination over elements

    Equivalent to GET /v1/rest/element/search
    """
    elementBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): ElementBaseResponse @skipAuth

    """
    Retrieval of a single element

    Equivalent to GET /v1/rest/element
    """
    elementFullResponse(
      """
      Element unique ID
      """
      uid: String!
    ): ElementFullResponse @skipAuth

    """
    Pagination over elements (V2)

    Equivalent to GET /v2/rest/element/search
    """
    elementV2BaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): ElementV2BaseResponse @skipAuth

    """
    Retrieval of a single element (V2)

    Equivalent to GET /v2/rest/element
    """
    elementV2FullResponse(
      """
      Element unique ID
      """
      uid: String!
    ): ElementV2FullResponse @skipAuth

    """
    Pagination over episodes

    Equivalent to GET /v1/rest/episode/search
    """
    episodeBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): EpisodeBaseResponse @skipAuth

    """
    Retrieval of a single episode

    Equivalent to GET /v1/rest/episode
    """
    episodeFullResponse(
      """
      Episode unique ID
      """
      uid: String!
    ): EpisodeFullResponse @skipAuth

    """
    Pagination over foods

    Equivalent to GET /v1/rest/food/search
    """
    foodBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): FoodBaseResponse @skipAuth

    """
    Retrieval of a single food

    Equivalent to GET /v1/rest/food
    """
    foodFullResponse(
      """
      Food unique ID
      """
      uid: String!
    ): FoodFullResponse @skipAuth

    """
    Pagination over literature

    Equivalent to GET /v1/rest/literature/search
    """
    literatureBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): LiteratureBaseResponse @skipAuth

    """
    Retrieval of a single literature

    Equivalent to GET /v1/rest/literature
    """
    literatureFullResponse(
      """
      Literature unique ID
      """
      uid: String!
    ): LiteratureFullResponse @skipAuth

    """
    Pagination over locations

    Equivalent to GET /v1/rest/location/search
    """
    locationBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): LocationBaseResponse @skipAuth

    """
    Retrieval of a single location

    Equivalent to GET /v1/rest/location
    """
    locationFullResponse(
      """
      Location unique ID
      """
      uid: String!
    ): LocationFullResponse @skipAuth

    """
    Pagination over locations (V2)

    Equivalent to GET /v2/rest/location/search
    """
    locationV2BaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): LocationV2BaseResponse @skipAuth

    """
    Retrieval of a single location (V2)

    Equivalent to GET /v2/rest/location
    """
    locationV2FullResponse(
      """
      Location unique ID
      """
      uid: String!
    ): LocationV2FullResponse @skipAuth

    """
    Pagination over magazines

    Equivalent to GET /v1/rest/magazine/search
    """
    magazineBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): MagazineBaseResponse @skipAuth

    """
    Retrieval of a single magazine

    Equivalent to GET /v1/rest/magazine
    """
    magazineFullResponse(
      """
      Magazine unique ID
      """
      uid: String!
    ): MagazineFullResponse @skipAuth

    """
    Pagination over magazine series

    Equivalent to GET /v1/rest/magazineSeries/search
    """
    magazineSeriesBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): MagazineSeriesBaseResponse @skipAuth

    """
    Retrieval of a single magazine series

    Equivalent to GET /v1/rest/magazineSeries
    """
    magazineSeriesFullResponse(
      """
      Magazine series unique ID
      """
      uid: String!
    ): MagazineSeriesFullResponse @skipAuth

    """
    Pagination over materials

    Equivalent to GET /v1/rest/material/search
    """
    materialBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): MaterialBaseResponse @skipAuth

    """
    Retrieval of a single material

    Equivalent to GET /v1/rest/material
    """
    materialFullResponse(
      """
      Material unique ID
      """
      uid: String!
    ): MaterialFullResponse @skipAuth

    """
    Pagination over medical conditions

    Equivalent to GET /v1/rest/medicalCondition/search
    """
    medicalConditionBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): MedicalConditionBaseResponse @skipAuth

    """
    Retrieval of a single medical condition

    Equivalent to GET /v1/rest/medicalCondition
    """
    medicalConditionFullResponse(
      """
      Medical condition unique ID
      """
      uid: String!
    ): MedicalConditionFullResponse @skipAuth

    """
    Pagination over movies

    Equivalent to GET /v1/rest/movie/search
    """
    movieBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): MovieBaseResponse @skipAuth

    """
    Retrieval of a single movie

    Equivalent to GET /v1/rest/movie
    """
    movieFullResponse(
      """
      Movie unique ID
      """
      uid: String!
    ): MovieFullResponse @skipAuth

    """
    Pagination over occupations

    Equivalent to GET /v1/rest/occupation/search
    """
    occupationBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): OccupationBaseResponse @skipAuth

    """
    Retrieval of a single occupation

    Equivalent to GET /v1/rest/occupation
    """
    occupationFullResponse(
      """
      Occupation unique ID
      """
      uid: String!
    ): OccupationFullResponse @skipAuth

    """
    Pagination over occupations (V2)

    Equivalent to GET /v2/rest/occupation/search
    """
    occupationV2BaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): OccupationV2BaseResponse @skipAuth

    """
    Retrieval of a single occupation (V2)

    Equivalent to GET /v2/rest/occupation
    """
    occupationV2FullResponse(
      """
      Occupation unique ID
      """
      uid: String!
    ): OccupationV2FullResponse @skipAuth

    """
    Pagination over organizations

    Equivalent to GET /v1/rest/organization/search
    """
    organizationBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): OrganizationBaseResponse @skipAuth

    """
    Retrieval of a single organization

    Equivalent to GET /v1/rest/organization
    """
    organizationFullResponse(
      """
      Organization unique ID
      """
      uid: String!
    ): OrganizationFullResponse @skipAuth

    """
    Pagination over performers

    Equivalent to GET /v1/rest/performer/search
    """
    performerBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): PerformerBaseResponse @skipAuth

    """
    Retrieval of a single performer

    Equivalent to GET /v1/rest/performer
    """
    performerFullResponse(
      """
      Performer unique ID
      """
      uid: String!
    ): PerformerFullResponse @skipAuth

    """
    Pagination over performers (V2)

    Equivalent to GET /v2/rest/performer/search
    """
    performerV2BaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): PerformerV2BaseResponse @skipAuth

    """
    Retrieval of a single performer (V2)

    Equivalent to GET /v2/rest/performer
    """
    performerV2FullResponse(
      """
      Performer unique ID
      """
      uid: String!
    ): PerformerV2FullResponse @skipAuth

    """
    Pagination over seasons

    Equivalent to GET /v1/rest/season/search
    """
    seasonBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): SeasonBaseResponse @skipAuth

    """
    Retrieval of a single season

    Equivalent to GET /v1/rest/season
    """
    seasonFullResponse(
      """
      Season unique ID
      """
      uid: String!
    ): SeasonFullResponse @skipAuth

    """
    Pagination over series

    Equivalent to GET /v1/rest/series/search
    """
    seriesBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): SeriesBaseResponse @skipAuth

    """
    Retrieval of a single series

    Equivalent to GET /v1/rest/series
    """
    seriesFullResponse(
      """
      Series unique ID
      """
      uid: String!
    ): SeriesFullResponse @skipAuth

    """
    Pagination over soundtracks

    Equivalent to GET /v1/rest/soundtrack/search
    """
    soundtrackBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): SoundtrackBaseResponse @skipAuth

    """
    Retrieval of a single soundtrack

    Equivalent to GET /v1/rest/soundtrack
    """
    soundtrackFullResponse(
      """
      Soundtrack unique ID
      """
      uid: String!
    ): SoundtrackFullResponse @skipAuth

    """
    Pagination over spacecrafts

    Equivalent to GET /v1/rest/spacecraft/search
    """
    spacecraftBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): SpacecraftBaseResponse @skipAuth

    """
    Pagination over spacecraft classes

    Equivalent to GET /v1/rest/spacecraftClass/search
    """
    spacecraftClassBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): SpacecraftClassBaseResponse @skipAuth

    """
    Retrieval of a single spacecraft class

    Equivalent to GET /v1/rest/spacecraftClass
    """
    spacecraftClassFullResponse(
      """
      SpacecraftClass unique ID
      """
      uid: String!
    ): SpacecraftClassFullResponse @skipAuth

    """
    Pagination over spacecraft classes (V2)

    Equivalent to GET /v2/rest/spacecraftClass/search
    """
    spacecraftClassV2BaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): SpacecraftClassV2BaseResponse @skipAuth

    """
    Retrieval of a single spacecraft class (V2)

    Equivalent to GET /v2/rest/spacecraftClass
    """
    spacecraftClassV2FullResponse(
      """
      SpacecraftClass unique ID
      """
      uid: String!
    ): SpacecraftClassV2FullResponse @skipAuth

    """
    Retrieval of a single spacecraft class (V3)

    Equivalent to GET /v3/rest/spacecraftClass
    """
    spacecraftClassV3FullResponse(
      """
      Spacecraft class unique ID
      """
      uid: String!
    ): SpacecraftClassV3FullResponse @skipAuth

    """
    Retrieval of a single spacecraft

    Equivalent to GET /v1/rest/spacecraft
    """
    spacecraftFullResponse(
      """
      Spacecraft unique ID
      """
      uid: String!
    ): SpacecraftFullResponse @skipAuth

    """
    Pagination over spacecrafts (V2)

    Equivalent to GET /v2/rest/spacecraft/search
    """
    spacecraftV2BaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): SpacecraftV2BaseResponse @skipAuth

    """
    Retrieval of a single spacecraft (V2)

    Equivalent to GET /v2/rest/spacecraft
    """
    spacecraftV2FullResponse(
      """
      Spacecraft unique ID
      """
      uid: String!
    ): SpacecraftV2FullResponse @skipAuth

    """
    Pagination over species

    Equivalent to GET /v1/rest/species/search
    """
    speciesBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): SpeciesBaseResponse @skipAuth

    """
    Retrieval of a single species

    Equivalent to GET /v1/rest/species
    """
    speciesFullResponse(
      """
      Species unique ID
      """
      uid: String!
    ): SpeciesFullResponse @skipAuth

    """
    Pagination over species (V2)

    Equivalent to GET /v2/rest/species/search
    """
    speciesV2BaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): SpeciesV2BaseResponse @skipAuth

    """
    Retrieval of a single species (V2)

    Equivalent to GET /v2/rest/species
    """
    speciesV2FullResponse(
      """
      Species unique ID
      """
      uid: String!
    ): SpeciesV2FullResponse @skipAuth

    """
    Pagination over staff members

    Equivalent to GET /v1/rest/staff/search
    """
    staffBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): StaffBaseResponse @skipAuth

    """
    Retrieval of a single staff member

    Equivalent to GET /v1/rest/staff
    """
    staffFullResponse(
      """
      Staff unique ID
      """
      uid: String!
    ): StaffFullResponse @skipAuth

    """
    Pagination over staff members (V2)

    Equivalent to GET /v2/rest/staff/search
    """
    staffV2BaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): StaffV2BaseResponse @skipAuth

    """
    Retrieval of a single staff member (V2)

    Equivalent to GET /v2/rest/staff
    """
    staffV2FullResponse(
      """
      Staff unique ID
      """
      uid: String!
    ): StaffV2FullResponse @skipAuth

    """
    Pagination over technology pieces

    Equivalent to GET /v1/rest/technology/search
    """
    technologyBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): TechnologyBaseResponse @skipAuth

    """
    Retrieval of a single technology piece

    Equivalent to GET /v1/rest/technology
    """
    technologyFullResponse(
      """
      Technology unique ID
      """
      uid: String!
    ): TechnologyFullResponse @skipAuth

    """
    Pagination over technology pieces (V2)

    Equivalent to GET /v2/rest/technology/search
    """
    technologyV2BaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): TechnologyV2BaseResponse @skipAuth

    """
    Retrieval of a single technology piece (V2)

    Equivalent to GET /v2/rest/technology
    """
    technologyV2FullResponse(
      """
      Technology unique ID
      """
      uid: String!
    ): TechnologyV2FullResponse @skipAuth

    """
    Pagination over titles

    Equivalent to GET /v1/rest/title/search
    """
    titleBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): TitleBaseResponse @skipAuth

    """
    Retrieval of a single title

    Equivalent to GET /v1/rest/title
    """
    titleFullResponse(
      """
      Title unique ID
      """
      uid: String!
    ): TitleFullResponse @skipAuth

    """
    Pagination over titles (V2)

    Equivalent to GET /v2/rest/title/search
    """
    titleV2BaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): TitleV2BaseResponse @skipAuth

    """
    Retrieval of a single title (V2)

    Equivalent to GET /v2/rest/title
    """
    titleV2FullResponse(
      """
      Title unique ID
      """
      uid: String!
    ): TitleV2FullResponse @skipAuth

    """
    Pagination over trading cards

    Equivalent to GET /v1/rest/tradingCard/search
    """
    tradingCardBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): TradingCardBaseResponse @skipAuth

    """
    Pagination over trading card decks

    Equivalent to GET /v1/rest/tradingCardDeck/search
    """
    tradingCardDeckBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): TradingCardDeckBaseResponse @skipAuth

    """
    Retrieval of a single trading card deck

    Equivalent to GET /v1/rest/tradingCardDeck
    """
    tradingCardDeckFullResponse(
      """
      trading card deck unique ID
      """
      uid: String!
    ): TradingCardDeckFullResponse @skipAuth

    """
    Retrieval of a single trading card

    Equivalent to GET /v1/rest/tradingCard
    """
    tradingCardFullResponse(
      """
      Trading card unique ID
      """
      uid: String!
    ): TradingCardFullResponse @skipAuth

    """
    Pagination over trading card sets

    Equivalent to GET /v1/rest/tradingCardSet/search
    """
    tradingCardSetBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): TradingCardSetBaseResponse @skipAuth

    """
    Retrieval of a single trading card set

    Equivalent to GET /v1/rest/tradingCardSet
    """
    tradingCardSetFullResponse(
      """
      Trading card set unique ID
      """
      uid: String!
    ): TradingCardSetFullResponse @skipAuth

    """
    Pagination over video releases (V2)

    Equivalent to GET /v2/rest/videoRelease/search
    """
    v2PageVideoReleases(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): VideoReleaseBaseResponse @skipAuth

    """
    Pagination over video games

    Equivalent to GET /v1/rest/videoGame/search
    """
    videoGameBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): VideoGameBaseResponse @skipAuth

    """
    Retrieval of a single video game

    Equivalent to GET /v1/rest/videoGame
    """
    videoGameFullResponse(
      """
      VideoGame unique ID
      """
      uid: String!
    ): VideoGameFullResponse @skipAuth

    """
    Pagination over video releases

    Equivalent to GET /v1/rest/videoRelease/search
    """
    videoReleaseBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): VideoReleaseBaseResponse @skipAuth

    """
    Retrieval of a single video release

    Equivalent to GET /v1/rest/videoRelease
    """
    videoReleaseFullResponse(
      """
      Video release unique ID
      """
      uid: String!
    ): VideoReleaseFullResponse @skipAuth

    """
    Retrieval of a single video release (V2)

    Equivalent to GET /v2/rest/videoRelease
    """
    videoReleaseV2FullResponse(
      """
      Video release unique ID
      """
      uid: String!
    ): VideoReleaseV2FullResponse @skipAuth

    """
    Pagination over weapons

    Equivalent to GET /v1/rest/weapon/search
    """
    weaponBaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): WeaponBaseResponse @skipAuth

    """
    Retrieval of a single weapon

    Equivalent to GET /v1/rest/weapon
    """
    weaponFullResponse(
      """
      Weapon unique ID
      """
      uid: String!
    ): WeaponFullResponse @skipAuth

    """
    Pagination over weapons (V2)

    Equivalent to GET /v2/rest/weapon/search
    """
    weaponV2BaseResponse(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int
    ): WeaponV2BaseResponse @skipAuth

    """
    Retrieval of a single weapon (V2)

    Equivalent to GET /v2/rest/weapon
    """
    weaponV2FullResponse(
      """
      Weapon unique ID
      """
      uid: String!
    ): WeaponV2FullResponse @skipAuth
  }

  """
  Response object for animals search
  """
  type AnimalBaseResponse {
    """
    List of animals matching given criteria
    """
    animals: [AnimalBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Base animal, returned in search results
  """
  type AnimalBase {
    """
    Whether it's an avian
    """
    avian: Boolean

    """
    Whether it's a canine
    """
    canine: Boolean

    """
    Whether it's an earth animal
    """
    earthAnimal: Boolean

    """
    Whether it's an earth insect
    """
    earthInsect: Boolean

    """
    Whether it's a feline
    """
    feline: Boolean

    """
    Animal name
    """
    name: String!

    """
    Animal unique ID
    """
    uid: String!
  }

  """
  Object describing response page
  """
  type ResponsePage {
    """
    Whether it is the first page
    """
    firstPage: Boolean

    """
    Whether it is the last page
    """
    lastPage: Boolean

    """
    Number of elements in page
    """
    numberOfElements: Int

    """
    Zero-based page number
    """
    pageNumber: Int

    """
    Page size
    """
    pageSize: Int

    """
    Total elements found
    """
    totalElements: Int

    """
    Total pages found
    """
    totalPages: Int
  }

  """
  Response sort
  """
  type ResponseSort {
    """
    List of response sort rules
    """
    clauses: [ResponseSortClause]
  }

  """
  Single response sort clause
  """
  type ResponseSortClause {
    """
    Order in which this clause was applied
    """
    clauseOrder: Int!

    """
    Sort direction
    """
    direction: ResponseSortDirection!

    """
    Field name results are sorted by
    """
    name: String!
  }

  enum ResponseSortDirection {
    ASC
    DESC
  }

  """
  Response object for single animal query
  """
  type AnimalFullResponse {
    """
    Full animal, returned when queried using UID
    """
    animal: AnimalFull
  }

  """
  Full animal, returned when queried using UID
  """
  type AnimalFull {
    """
    Whether it's an avian
    """
    avian: Boolean

    """
    Whether it's a canine
    """
    canine: Boolean

    """
    Whether it's an earth animal
    """
    earthAnimal: Boolean

    """
    Whether it's an earth insect
    """
    earthInsect: Boolean

    """
    Whether it's a feline
    """
    feline: Boolean

    """
    Animal name
    """
    name: String!

    """
    Animal unique ID
    """
    uid: String!
  }

  """
  Response object for astronomical objects search
  """
  type AstronomicalObjectBaseResponse {
    astronomicalObjects: [AstronomicalObjectBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Base astronomical object, returned in search results
  """
  type AstronomicalObjectBase {
    """
    Astronomical object type
    """
    astronomicalObjectType: AstronomicalObjectType!

    """
    Header astronomical object, embedded in other objects
    """
    location: AstronomicalObjectHeader

    """
    Astronomical object name
    """
    name: String!

    """
    Astronomical object's unique ID
    """
    uid: String!
  }

  enum AstronomicalObjectType {
    PLANET
    D_CLASS_PLANET
    H_CLASS_PLANET
    GAS_GIANT_PLANET
    K_CLASS_PLANET
    L_CLASS_PLANET
    M_CLASS_PLANET
    Y_CLASS_PLANET
    ROGUE_PLANET
    ARTIFICIAL_PLANET
    ASTEROID
    ASTEROIDAL_MOON
    ASTEROID_BELT
    CLUSTER
    COMET
    CONSTELLATION
    GALAXY
    MOON
    M_CLASS_MOON
    NEBULA
    PLANETOID
    D_CLASS_PLANETOID
    QUASAR
    STAR
    STAR_SYSTEM
    SECTOR
    REGION
  }

  """
  Header astronomical object, embedded in other objects
  """
  type AstronomicalObjectHeader {
    """
    Astronomical object name
    """
    name: String!

    """
    Astronomical object's unique ID
    """
    uid: String!
  }

  """
  Response object for single astronomical object query
  """
  type AstronomicalObjectFullResponse {
    """
    Full astronomical object, returned when queried using UID
    """
    astronomicalObject: AstronomicalObjectFull
  }

  """
  Full astronomical object, returned when queried using UID
  """
  type AstronomicalObjectFull {
    """
    Astronomical object type
    """
    astronomicalObjectType: AstronomicalObjectType

    """
    Astronomical objects located in this astronomical object, like planets in a star system
    """
    astronomicalObjects: [AstronomicalObjectBase]!

    """
    Base astronomical object, returned in search results
    """
    location: AstronomicalObjectBase

    """
    Astronomical object name
    """
    name: String!

    """
    Astronomical object's unique ID
    """
    uid: String!
  }

  """
  Response object for astronomical objects search (v2)
  """
  type AstronomicalObjectV2BaseResponse {
    """
    List of astronomical objects matching given criteria
    """
    astronomicalObjects: [AstronomicalObjectV2Base]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Base astronomical object, returned in search results (V2)
  """
  type AstronomicalObjectV2Base {
    """
    Astronomical object type (V2)
    """
    astronomicalObjectType: AstronomicalObjectV2Type!

    """
    Header astronomical object, embedded in other objects
    """
    location: AstronomicalObjectHeader

    """
    Astronomical object name
    """
    name: String!

    """
    Astronomical object's unique ID
    """
    uid: String!
  }

  enum AstronomicalObjectV2Type {
    PLANET
    D_CLASS_PLANET
    H_CLASS_PLANET
    GAS_GIANT_PLANET
    K_CLASS_PLANET
    L_CLASS_PLANET
    M_CLASS_PLANET
    Y_CLASS_PLANET
    ROGUE_PLANET
    ARTIFICIAL_PLANET
    ASTEROID
    ASTEROIDAL_MOON
    ASTEROID_BELT
    BORG_SPATIAL_DESIGNATION
    CLUSTER
    COMET
    CONSTELLATION
    GALAXY
    MOON
    M_CLASS_MOON
    NEBULA
    PLANETOID
    D_CLASS_PLANETOID
    QUADRANT
    QUASAR
    STAR
    STAR_SYSTEM
    SECTOR
    REGION
  }

  """
  Response object for single astronomical object query (V2)
  """
  type AstronomicalObjectV2FullResponse {
    """
    Full astronomical object, returned when queried using UID (V2)
    """
    astronomicalObject: AstronomicalObjectV2Full
  }

  """
  Full astronomical object, returned when queried using UID (V2)
  """
  type AstronomicalObjectV2Full {
    """
    Astronomical object type (V2)
    """
    astronomicalObjectType: AstronomicalObjectV2Type!

    """
    Astronomical objects located in this astronomical object, like planets in a star system
    """
    astronomicalObjects: [AstronomicalObjectV2Base]

    """
    Base astronomical object, returned in search results (V2)
    """
    location: AstronomicalObjectV2Base

    """
    Astronomical object name
    """
    name: String!

    """
    Astronomical object's unique ID
    """
    uid: String!
  }

  """
  Response object for books search
  """
  type BookBaseResponse {
    """
    List of books matching given criteria
    """
    books: [BookBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Base book, returned in search results
  """
  type BookBase {
    """
    Whether it's an anthology
    """
    anthology: Boolean!

    """
    Whether it's an audiobook, or has been release as an audiobook in addition to other form
    """
    audiobook: Boolean!

    """
    If it's an audiobook, whether it's been abridged
    """
    audiobookAbridged: Boolean!

    """
    Day the audiobook was published
    """
    audiobookPublishedDay: Int

    """
    Month the audiobook was published
    """
    audiobookPublishedMonth: Int

    """
    Year the audiobook was published
    """
    audiobookPublishedYear: Int

    """
    Audiobook run time, in minutes
    """
    audiobookRunTime: Int

    """
    Whether it's a biography book
    """
    biographyBook: Boolean!

    """
    Whether it's an e-book
    """
    ebook: Boolean!

    """
    Whether it's a novel
    """
    novel: Boolean!

    """
    Whether it's a novelization
    """
    novelization: Boolean!

    """
    Number of pages
    """
    numberOfPages: Int

    """
    Book's production number
    """
    productionNumber: String

    """
    Day the book was published
    """
    publishedDay: Int

    """
    Month the book was published
    """
    publishedMonth: Int

    """
    Year the book was published
    """
    publishedYear: Int

    """
    Whether it's a reference book
    """
    referenceBook: Boolean!

    """
    Whether it's a role playing book
    """
    rolePlayingBook: Boolean!

    """
    Starting stardate of book story
    """
    stardateFrom: Float

    """
    Ending stardate of book story
    """
    stardateTo: Float

    """
    Book title
    """
    title: String!

    """
    Book unique ID
    """
    uid: String!

    """
    Starting year of book story
    """
    yearFrom: Int

    """
    Ending year of book story
    """
    yearTo: Int
  }

  """
  Response object for book collections search
  """
  type BookCollectionBaseResponse {
    """
    List of book collections matching given criteria
    """
    bookCollections: [BookCollectionBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Base book collection, returned in search results
  """
  type BookCollectionBase {
    """
    Number of pages
    """
    numberOfPages: Int

    """
    Day the book collection was published
    """
    publishedDay: Int

    """
    Month the book collection was published
    """
    publishedMonth: Int

    """
    Year the book collection was published
    """
    publishedYear: Int

    """
    Starting stardate of book collection stories
    """
    stardateFrom: Float

    """
    Ending stardate of book collection stories
    """
    stardateTo: Float

    """
    Book collection title
    """
    title: String

    """
    Book collection unique ID
    """
    uid: String

    """
    Starting year of book collection stories
    """
    yearFrom: Int

    """
    Ending year of book collection stories
    """
    yearTo: Int
  }

  """
  Response object for single book collection query
  """
  type BookCollectionFullResponse {
    """
    Full book collection, returned when queried using UID
    """
    bookCollection: BookCollectionFull
  }

  """
  Full book collection, returned when queried using UID
  """
  type BookCollectionFull {
    """
    Artists involved in the book collection
    """
    artists: [StaffBase]

    """
    Authors of the book collection
    """
    authors: [StaffBase]

    """
    Book series this book collection is included in
    """
    bookSeries: [BookSeriesBase]

    """
    Books included in this book collection
    """
    books: [BookBase]

    """
    Characters appearing in the book collection
    """
    characters: [CharacterBase]

    """
    Editors involved in the book collection
    """
    editors: [StaffBase]

    """
    Number of pages
    """
    numberOfPages: Int

    """
    Day the book collection was published
    """
    publishedDay: Int

    """
    Month the book collection was published
    """
    publishedMonth: Int

    """
    Year the book collection was published
    """
    publishedYear: Int

    """
    Book collection publishers
    """
    publishers: [CompanyBase]

    """
    References
    """
    references: [Reference]

    """
    Starting stardate of book collection stories
    """
    stardateFrom: Float

    """
    Ending stardate of book collection stories
    """
    stardateTo: Float

    """
    Book collection title
    """
    title: String

    """
    Book collection unique ID
    """
    uid: String

    """
    Starting year of book collection stories
    """
    yearFrom: Int

    """
    Ending year of book collection stories
    """
    yearTo: Int
  }

  """
  Base staff, returned in search results
  """
  type StaffBase {
    """
    Whether this person if from art department
    """
    artDepartment: Boolean

    """
    Whether this person is an art director
    """
    artDirector: Boolean

    """
    Whether this person is an assistant or second unit director director
    """
    assistantOrSecondUnitDirector: Boolean

    """
    Whether this person is an audio author
    """
    audioAuthor: Boolean

    """
    Whether this person is an author
    """
    author: Boolean

    """
    Staff birth name
    """
    birthName: String

    """
    Whether this person is a calendar artist
    """
    calendarArtist: Boolean

    """
    Whether this person is from camera and electrical department
    """
    cameraAndElectricalDepartment: Boolean

    """
    Whether this person is from casting department
    """
    castingDepartment: Boolean

    """
    Whether this person is a part of CBS digital staff
    """
    cbsDigitalStaff: Boolean

    """
    Whether this person is a cinematographer
    """
    cinematographer: Boolean

    """
    Whether this person is a comic artist
    """
    comicArtist: Boolean

    """
    Whether this person is a comic author
    """
    comicAuthor: Boolean

    """
    Whether this person is a comic color artist
    """
    comicColorArtist: Boolean

    """
    Whether this person is a comic ink artist
    """
    comicInkArtist: Boolean

    """
    Whether this person is a comic interior artist
    """
    comicInteriorArtist: Boolean

    """
    Whether this person is a comic letter artist
    """
    comicLetterArtist: Boolean

    """
    Whether this person is a comic pencil artist
    """
    comicPencilArtist: Boolean

    """
    Whether this person is a comic strip artist
    """
    comicStripArtist: Boolean

    """
    Whether this person is a composer
    """
    composer: Boolean

    """
    Whether this person is from costume department
    """
    costumeDepartment: Boolean

    """
    Whether this person is a custume designer
    """
    costumeDesigner: Boolean

    """
    Date the staff was born
    """
    dateOfBirth: String

    """
    Date the staff died
    """
    dateOfDeath: String

    """
    Whether this person is a director
    """
    director: Boolean

    """
    Whether this person is an exhibit and tttraction staff
    """
    exhibitAndAttractionStaff: Boolean

    """
    Whether this person is a film editor
    """
    filmEditor: Boolean

    """
    Whether this person is a game artist
    """
    gameArtist: Boolean

    """
    Whether this person is a game author
    """
    gameAuthor: Boolean

    """
    Gender
    """
    gender: Gender

    """
    Whether this person is a part of ILM production staff
    """
    ilmProductionStaff: Boolean

    """
    Whether this person is a linguist
    """
    linguist: Boolean

    """
    Whether this person is a location staff
    """
    locationStaff: Boolean

    """
    Whether this person is a make-up staff
    """
    makeupStaff: Boolean

    """
    Whether this person is from music department
    """
    musicDepartment: Boolean

    """
    Staff name
    """
    name: String!

    """
    Whether this person is a novel artist
    """
    novelArtist: Boolean

    """
    Whether this person is a novel author
    """
    novelAuthor: Boolean

    """
    Whether this person is a personal assistant
    """
    personalAssistant: Boolean

    """
    Place the staff was born
    """
    placeOfBirth: String

    """
    Place the staff died
    """
    placeOfDeath: String

    """
    Whether this person is a producer
    """
    producer: Boolean

    """
    Whether this person is a production associate
    """
    productionAssociate: Boolean

    """
    Whether this person is a production designer
    """
    productionDesigner: Boolean

    """
    Whether this person is a production staff
    """
    productionStaff: Boolean

    """
    Whether this person is a publication artist
    """
    publicationArtist: Boolean

    """
    Whether this person is a publication designer
    """
    publicationDesigner: Boolean

    """
    Whether this person is a publication editor
    """
    publicationEditor: Boolean

    """
    Whether this person is a publication staff
    """
    publicationStaff: Boolean

    """
    Whether this person is a publication artist
    """
    publicityArtist: Boolean

    """
    Whether this person is a reference artist
    """
    referenceArtist: Boolean

    """
    Whether this person is a reference author
    """
    referenceAuthor: Boolean

    """
    Whether this person is a science consultant
    """
    scienceConsultant: Boolean

    """
    Whether this person is from sound department
    """
    soundDepartment: Boolean

    """
    Whether this person is a special and visual effects staff
    """
    specialAndVisualEffectsStaff: Boolean

    """
    Whether this person is a special features artist
    """
    specialFeaturesStaff: Boolean

    """
    Whether this person is a story editor
    """
    storyEditor: Boolean

    """
    Whether this person is a studio executive
    """
    studioExecutive: Boolean

    """
    Whether this person is from stunt department
    """
    stuntDepartment: Boolean

    """
    Whether this person is from transportation department
    """
    transportationDepartment: Boolean

    """
    Staff unique ID
    """
    uid: String!

    """
    Whether this person is video game production staff
    """
    videoGameProductionStaff: Boolean

    """
    Whether this person is a writer
    """
    writer: Boolean
  }

  enum Gender {
    F
    M
  }

  """
  Base book series, returned in search results
  """
  type BookSeriesBase {
    """
    Whether it's a e-book series
    """
    ebookSeries: Boolean

    """
    Whether it's a miniseries
    """
    miniseries: Boolean

    """
    Number of pages
    """
    numberOfBooks: Int

    """
    Month from which the book series was published
    """
    publishedMonthFrom: Int

    """
    Month to which the book series was published
    """
    publishedMonthTo: Int

    """
    Year from which the book series was published
    """
    publishedYearFrom: Int

    """
    Year to which the book series was published
    """
    publishedYearTo: Int

    """
    Book series title
    """
    title: String!

    """
    Book series unique ID
    """
    uid: String!

    """
    Starting year of book series stories
    """
    yearFrom: Int

    """
    Ending year of book series stories
    """
    yearTo: Int
  }

  """
  Base character, returned in search results
  """
  type CharacterBase {
    """
    Whether this character is from alternate reality
    """
    alternateReality: Boolean

    """
    Blood type
    """
    bloodType: BloodType

    """
    Day the character was born
    """
    dayOfBirth: Int

    """
    Day the character died
    """
    dayOfDeath: Int

    """
    Whether this character is deceased
    """
    deceased: Boolean

    """
    Whether this character is a fictional character (from universe point of view)
    """
    fictionalCharacter: Boolean

    """
    Gender
    """
    gender: Gender

    """
    Height in centimeters
    """
    height: Int

    """
    Whether this character is a hologram
    """
    hologram: Boolean

    """
    Hologram activation date
    """
    hologramActivationDate: String

    """
    Hologram date status
    """
    hologramDateStatus: String

    """
    Hologram status
    """
    hologramStatus: String

    """
    Marital status
    """
    maritalStatus: MaritalStatus

    """
    Whether this character is from mirror universe
    """
    mirror: Boolean

    """
    Month the character was born
    """
    monthOfBirth: Int

    """
    Month the character died
    """
    monthOfDeath: Int

    """
    Character name
    """
    name: String!

    """
    Place of birth
    """
    placeOfBirth: String

    """
    Place of death
    """
    placeOfDeath: String

    """
    Serial number
    """
    serialNumber: String

    """
    Character unique ID
    """
    uid: String!

    """
    Weight in kilograms
    """
    weight: Int

    """
    Year the character was born
    """
    yearOfBirth: Int

    """
    Year the character died
    """
    yearOfDeath: Int
  }

  enum BloodType {
    B_NEGATIVE
    O_NEGATIVE
    T_NEGATIVE
  }

  enum MaritalStatus {
    SINGLE
    ENGAGED
    MARRIED
    DIVORCED
    REMARRIED
    SEPARATED
    WIDOWED
    CAPTAINS_WOMAN
  }

  """
  Base company, returned in search results
  """
  type CompanyBase {
    """
    Whether it's a broadcaster
    """
    broadcaster: Boolean

    """
    Whether it's a collectible company
    """
    collectibleCompany: Boolean

    """
    Whether it's a conglomerate
    """
    conglomerate: Boolean

    """
    Whether it's a digital visual effects company
    """
    digitalVisualEffectsCompany: Boolean

    """
    Whether it's a distributor
    """
    distributor: Boolean

    """
    Whether it's a film equipment company
    """
    filmEquipmentCompany: Boolean

    """
    Whether it's a game company
    """
    gameCompany: Boolean

    """
    Whether it's a make-up effects studio
    """
    makeUpEffectsStudio: Boolean

    """
    Whether it's a matte painting company
    """
    mattePaintingCompany: Boolean

    """
    Whether it's a model and miniature effects company
    """
    modelAndMiniatureEffectsCompany: Boolean

    """
    Company name
    """
    name: String!

    """
    Whether it's a post-production company
    """
    postProductionCompany: Boolean

    """
    Whether it's a production company
    """
    productionCompany: Boolean

    """
    Whether it's a prop company
    """
    propCompany: Boolean

    """
    Whether it's a record label
    """
    recordLabel: Boolean

    """
    Whether it's a special effects company
    """
    specialEffectsCompany: Boolean

    """
    Whether it's a TV and film production company
    """
    tvAndFilmProductionCompany: Boolean

    """
    Company unique ID
    """
    uid: String!

    """
    Whether it's a video game company
    """
    videoGameCompany: Boolean
  }

  """
  Reference of book, comics, video release, etc.
  """
  type Reference {
    """
    Reference number
    """
    referenceNumber: String

    """
    Reference type
    """
    referenceType: ReferenceType

    """
    Reference unique ID
    """
    uid: String
  }

  enum ReferenceType {
    ASIN
    ISBN
    EAN
    ISRC
  }

  """
  Response object for single book query
  """
  type BookFullResponse {
    """
    Full book, returned when queried using UID
    """
    book: BookFull
  }

  """
  Full book, returned when queried using UID
  """
  type BookFull {
    """
    Whether it's an anthology
    """
    anthology: Boolean!

    """
    Artists involved in the book
    """
    artists: [StaffBase]

    """
    Whether it's an audiobook, or has been release as an audiobook in addition to other form
    """
    audiobook: Boolean!

    """
    If it's an audiobook, whether it's been abridged
    """
    audiobookAbridged: Boolean!

    """
    Audiobook narrators
    """
    audiobookNarrators: [StaffBase]

    """
    Day the audiobook was published
    """
    audiobookPublishedDay: Int

    """
    Month the audiobook was published
    """
    audiobookPublishedMonth: Int

    """
    Year the audiobook was published
    """
    audiobookPublishedYear: Int

    """
    Audiobook publishers
    """
    audiobookPublishers: [CompanyBase]

    """
    Audiobook references
    """
    audiobookReferences: [Reference]

    """
    Audiobook run time, in minutes
    """
    audiobookRunTime: Int

    """
    Authors of the book
    """
    authors: [StaffBase]

    """
    Whether it's a biography book
    """
    biographyBook: Boolean!

    """
    Book collections this book is included in
    """
    bookCollections: [BookCollectionBase]

    """
    Book series this book is included in
    """
    bookSeries: [BookSeriesBase]

    """
    Characters appearing the book
    """
    characters: [CharacterBase]

    """
    Whether it's an e-book
    """
    ebook: Boolean!

    """
    Editors involved in the book
    """
    editors: [StaffBase]

    """
    Whether it's a novel
    """
    novel: Boolean!

    """
    Whether it's a novelization
    """
    novelization: Boolean!

    """
    Number of pages
    """
    numberOfPages: Int

    """
    Book production number
    """
    productionNumber: String

    """
    Day the book was published
    """
    publishedDay: Int

    """
    Month the book was published
    """
    publishedMonth: Int

    """
    Year the book was published
    """
    publishedYear: Int

    """
    Book publishers
    """
    publishers: [CompanyBase]

    """
    Whether it's a reference book
    """
    referenceBook: Boolean!

    """
    References
    """
    references: [Reference]

    """
    Whether it's a role playing book
    """
    rolePlayingBook: Boolean!

    """
    Starting stardate of book story
    """
    stardateFrom: Float

    """
    Ending stardate of book story
    """
    stardateTo: Float

    """
    Book title
    """
    title: String!

    """
    Book unique ID
    """
    uid: String!

    """
    Starting year of book story
    """
    yearFrom: Int

    """
    Ending year of book story
    """
    yearTo: Int
  }

  """
  Response object for book series search
  """
  type BookSeriesBaseResponse {
    """
    List of book series matching given criteria
    """
    bookSeries: [BookSeriesBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Response object for single book series query
  """
  type BookSeriesFullResponse {
    """
    Full book series, returned when queried using UID
    """
    bookSeries: BookSeriesFull
  }

  """
  Full book series, returned when queried using UID
  """
  type BookSeriesFull {
    """
    Books included in this book series
    """
    books: [BookBase]

    """
    Child book series included in this book series
    """
    childSeries: [BookSeriesBase]

    """
    Whether it's a e-book series
    """
    ebookSeries: Boolean

    """
    Whether it's a miniseries
    """
    miniseries: Boolean

    """
    Number of books in book series
    """
    numberOfBooks: Int

    """
    Book series this book series is included in
    """
    parentSeries: [BookSeriesBase]

    """
    Month from which the book series was published
    """
    publishedMonthFrom: Int

    """
    Month to which the book series was published
    """
    publishedMonthTo: Int

    """
    Year from which the book series was published
    """
    publishedYearFrom: Int

    """
    Year to which the book series was published
    """
    publishedYearTo: Int

    """
    Companies that published this book series
    """
    publishers: [CompanyBase]

    """
    Book series title
    """
    title: String!

    """
    Book series unique ID
    """
    uid: String!

    """
    Starting year of book series stories
    """
    yearFrom: Int

    """
    Ending year of book series stories
    """
    yearTo: Int
  }

  """
  Response object for books search (V2)
  """
  type BookV2BaseResponse {
    """
    List of books matching given criteria
    """
    books: [BookV2Base]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Base book, returned in search results (V2)
  """
  type BookV2Base {
    """
    Whether it's an anthology
    """
    anthology: Boolean!

    """
    Whether it's an audiobook, or has been release as an audiobook in addition to other form
    """
    audiobook: Boolean!

    """
    If it's an audiobook, whether it's been abridged
    """
    audiobookAbridged: Boolean!

    """
    Day the audiobook was published
    """
    audiobookPublishedDay: Int

    """
    Month the audiobook was published
    """
    audiobookPublishedMonth: Int

    """
    Year the audiobook was published
    """
    audiobookPublishedYear: Int

    """
    Audiobook run time, in minutes
    """
    audiobookRunTime: Int

    """
    Whether it's a biography book
    """
    biographyBook: Boolean!

    """
    Whether it's an e-book
    """
    ebook: Boolean!

    """
    Whether it's a novel
    """
    novel: Boolean!

    """
    Whether it's a novelization
    """
    novelization: Boolean!

    """
    Number of pages
    """
    numberOfPages: Int

    """
    Book's production number
    """
    productionNumber: String

    """
    Day the book was published
    """
    publishedDay: Int

    """
    Month the book was published
    """
    publishedMonth: Int

    """
    Year the book was published
    """
    publishedYear: Int

    """
    Whether it's a reference book
    """
    referenceBook: Boolean!

    """
    Whether it's a role playing book
    """
    rolePlayingBook: Boolean!

    """
    Starting stardate of book story
    """
    stardateFrom: Float

    """
    Ending stardate of book story
    """
    stardateTo: Float

    """
    Book title
    """
    title: String!

    """
    Book unique ID
    """
    uid: String!

    """
    Whether it's an unauthorized publication
    """
    unauthorizedPublication: Boolean!

    """
    Starting year of book story
    """
    yearFrom: Int

    """
    Ending year of book story
    """
    yearTo: Int
  }

  """
  Response object for single book query (V2)
  """
  type BookV2FullResponse {
    """
    Full book, returned when queried using UID (V2)
    """
    book: BookV2Full
  }

  """
  Full book, returned when queried using UID (V2)
  """
  type BookV2Full {
    """
    Whether it's an anthology
    """
    anthology: Boolean!

    """
    Artists involved in the book
    """
    artists: [StaffV2Base]

    """
    Whether it's an audiobook, or has been release as an audiobook in addition to other form
    """
    audiobook: Boolean!

    """
    If it's an audiobook, whether it's been abridged
    """
    audiobookAbridged: Boolean!

    """
    Audiobook narrators
    """
    audiobookNarrators: [StaffV2Base]

    """
    Day the audiobook was published
    """
    audiobookPublishedDay: Int

    """
    Month the audiobook was published
    """
    audiobookPublishedMonth: Int

    """
    Year the audiobook was published
    """
    audiobookPublishedYear: Int

    """
    Audiobook publishers
    """
    audiobookPublishers: [CompanyV2Base]

    """
    Audiobook references
    """
    audiobookReferences: [Reference]

    """
    Audiobook run time, in minutes
    """
    audiobookRunTime: Int

    """
    Authors of the book
    """
    authors: [StaffV2Base]

    """
    Whether it's a biography book
    """
    biographyBook: Boolean!

    """
    Book collections this book is included in
    """
    bookCollections: [BookCollectionBase]

    """
    Book series this book is included in
    """
    bookSeries: [BookSeriesBase]

    """
    Characters appearing the book
    """
    characters: [CharacterBase]

    """
    Whether it's an e-book
    """
    ebook: Boolean!

    """
    Editors involved in the book
    """
    editors: [StaffV2Base]

    """
    Whether it's a novel
    """
    novel: Boolean!

    """
    Whether it's a novelization
    """
    novelization: Boolean!

    """
    Number of pages
    """
    numberOfPages: Int

    """
    Book production number
    """
    productionNumber: String

    """
    Day the book was published
    """
    publishedDay: Int

    """
    Month the book was published
    """
    publishedMonth: Int

    """
    Year the book was published
    """
    publishedYear: Int

    """
    Book publishers
    """
    publishers: [CompanyV2Base]

    """
    Whether it's a reference book
    """
    referenceBook: Boolean!

    """
    References
    """
    references: [Reference]

    """
    Whether it's a role playing book
    """
    rolePlayingBook: Boolean!

    """
    Starting stardate of book story
    """
    stardateFrom: Float

    """
    Ending stardate of book story
    """
    stardateTo: Float

    """
    Book title
    """
    title: String!

    """
    Book unique ID
    """
    uid: String!

    """
    Whether it's an unauthorized publication
    """
    unauthorizedPublication: Boolean!

    """
    Starting year of book story
    """
    yearFrom: Int

    """
    Ending year of book story
    """
    yearTo: Int
  }

  """
  Base staff, returned in search results (V2)
  """
  type StaffV2Base {
    """
    Whether this person if from art department
    """
    artDepartment: Boolean

    """
    Whether this person is an art director
    """
    artDirector: Boolean

    """
    Whether this person is an assistant or second unit director director
    """
    assistantOrSecondUnitDirector: Boolean

    """
    Whether this person is an audio author
    """
    audioAuthor: Boolean

    """
    Whether this person is an author
    """
    author: Boolean

    """
    Staff birth name
    """
    birthName: String

    """
    Whether this person is a calendar artist
    """
    calendarArtist: Boolean

    """
    Whether this person is from camera and electrical department
    """
    cameraAndElectricalDepartment: Boolean

    """
    Whether this person is from casting department
    """
    castingDepartment: Boolean

    """
    Whether this person is a part of CBS digital staff
    """
    cbsDigitalStaff: Boolean

    """
    Whether this person is a cinematographer
    """
    cinematographer: Boolean

    """
    Whether this person is a comic artist
    """
    comicArtist: Boolean

    """
    Whether this person is a comic author
    """
    comicAuthor: Boolean

    """
    Whether this person is a comic color artist
    """
    comicColorArtist: Boolean

    """
    Whether this person is a comic cover artist
    """
    comicCoverArtist: Boolean

    """
    Whether this person is a comic ink artist
    """
    comicInkArtist: Boolean

    """
    Whether this person is a comic interior artist
    """
    comicInteriorArtist: Boolean

    """
    Whether this person is a comic letter artist
    """
    comicLetterArtist: Boolean

    """
    Whether this person is a comic pencil artist
    """
    comicPencilArtist: Boolean

    """
    Whether this person is a comic strip artist
    """
    comicStripArtist: Boolean

    """
    Whether this person is a composer
    """
    composer: Boolean

    """
    Whether this person is from costume department
    """
    costumeDepartment: Boolean

    """
    Whether this person is a custume designer
    """
    costumeDesigner: Boolean

    """
    Date the staff was born
    """
    dateOfBirth: String

    """
    Date the staff died
    """
    dateOfDeath: String

    """
    Whether this person is a director
    """
    director: Boolean

    """
    Whether this person is an exhibit and attraction staff
    """
    exhibitAndAttractionStaff: Boolean

    """
    Whether this person is a film editor
    """
    filmEditor: Boolean

    """
    Whether this person is a part of Filmation production staff
    """
    filmationProductionStaff: Boolean

    """
    Whether this person is a game artist
    """
    gameArtist: Boolean

    """
    Whether this person is a game author
    """
    gameAuthor: Boolean

    """
    Gender
    """
    gender: Gender

    """
    Whether this person is a part of ILM production staff
    """
    ilmProductionStaff: Boolean

    """
    Whether this person is a linguist
    """
    linguist: Boolean

    """
    Whether this person is a location staff
    """
    locationStaff: Boolean

    """
    Whether this person is a make-up staff
    """
    makeupStaff: Boolean

    """
    Whether this person is a merchandise staff
    """
    merchandiseStaff: Boolean

    """
    Whether this person is from music department
    """
    musicDepartment: Boolean

    """
    Staff name
    """
    name: String!

    """
    Whether this person is a novel artist
    """
    novelArtist: Boolean

    """
    Whether this person is a novel author
    """
    novelAuthor: Boolean

    """
    Whether this person is a personal assistant
    """
    personalAssistant: Boolean

    """
    Place the staff was born
    """
    placeOfBirth: String

    """
    Place the staff died
    """
    placeOfDeath: String

    """
    Whether this person is a producer
    """
    producer: Boolean

    """
    Whether this person is a production associate
    """
    productionAssociate: Boolean

    """
    Whether this person is a production designer
    """
    productionDesigner: Boolean

    """
    Whether this person is a production staff
    """
    productionStaff: Boolean

    """
    Whether this person is a publication artist
    """
    publicationArtist: Boolean

    """
    Whether this person is a publication designer
    """
    publicationDesigner: Boolean

    """
    Whether this person is a publication editor
    """
    publicationEditor: Boolean

    """
    Whether this person is a publication staff
    """
    publicationStaff: Boolean

    """
    Whether this person is a publication artist
    """
    publicityArtist: Boolean

    """
    Whether this person is a reference artist
    """
    referenceArtist: Boolean

    """
    Whether this person is a reference author
    """
    referenceAuthor: Boolean

    """
    Whether this person is a science consultant
    """
    scienceConsultant: Boolean

    """
    Whether this person is from sound department
    """
    soundDepartment: Boolean

    """
    Whether this person is a special and visual effects staff
    """
    specialAndVisualEffectsStaff: Boolean

    """
    Whether this person is a special features artist
    """
    specialFeaturesStaff: Boolean

    """
    Whether this person is a story editor
    """
    storyEditor: Boolean

    """
    Whether this person is a studio executive
    """
    studioExecutive: Boolean

    """
    Whether this person is from stunt department
    """
    stuntDepartment: Boolean

    """
    Whether this person is from transportation department
    """
    transportationDepartment: Boolean

    """
    Staff unique ID
    """
    uid: String!

    """
    Whether this person is video game production staff
    """
    videoGameProductionStaff: Boolean

    """
    Whether this person is a writer
    """
    writer: Boolean
  }

  """
  Base company, returned in search results (V2)
  """
  type CompanyV2Base {
    """
    Whether it's a broadcaster
    """
    broadcaster: Boolean

    """
    Whether it's a collectible company
    """
    collectibleCompany: Boolean

    """
    Whether it's a conglomerate
    """
    conglomerate: Boolean

    """
    Whether it's a digital visual effects company
    """
    digitalVisualEffectsCompany: Boolean

    """
    Whether it's a distributor
    """
    distributor: Boolean

    """
    Whether it's a film equipment company
    """
    filmEquipmentCompany: Boolean

    """
    Whether it's a game company
    """
    gameCompany: Boolean

    """
    Whether it's a make-up effects studio
    """
    makeUpEffectsStudio: Boolean

    """
    Whether it's a matte painting company
    """
    mattePaintingCompany: Boolean

    """
    Whether it's a model and miniature effects company
    """
    modelAndMiniatureEffectsCompany: Boolean

    """
    Company name
    """
    name: String!

    """
    Whether it's a post-production company
    """
    postProductionCompany: Boolean

    """
    Whether it's a production company
    """
    productionCompany: Boolean

    """
    Whether it's a prop company
    """
    propCompany: Boolean

    """
    Whether it's a publication art studio
    """
    publicationArtStudio: Boolean

    """
    Whether it's a publisher
    """
    publisher: Boolean

    """
    Whether it's a record label
    """
    recordLabel: Boolean

    """
    Whether it's a special effects company
    """
    specialEffectsCompany: Boolean

    """
    Whether it's a streaming service
    """
    streamingService: Boolean

    """
    Whether it's a TV and film production company
    """
    tvAndFilmProductionCompany: Boolean

    """
    Company unique ID
    """
    uid: String!

    """
    Whether it's a video game company
    """
    videoGameCompany: Boolean

    """
    Whether it's a visual effects company
    """
    visualEffectsCompany: Boolean
  }

  """
  Response object for characters search
  """
  type CharacterBaseResponse {
    """
    List of characters matching given criteria
    """
    characters: [CharacterBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Response object for single character query
  """
  type CharacterFullResponse {
    """
    Full character, returned when queried using UID
    """
    character: CharacterFull
  }

  """
  Full character, returned when queried using UID
  """
  type CharacterFull {
    """
    Whether this character is from alternate reality
    """
    alternateReality: Boolean

    """
    Blood type
    """
    bloodType: BloodType

    """
    Relations with other characters
    """
    characterRelations: [CharacterRelation]

    """
    Species this character belongs to
    """
    characterSpecies: [CharacterSpecies2]

    """
    Day the character was born
    """
    dayOfBirth: Int

    """
    Day the character died
    """
    dayOfDeath: Int

    """
    Whether this character is deceased
    """
    deceased: Boolean

    """
    Episodes in which this character appeared
    """
    episodes: [EpisodeBase]

    """
    Whether this character is a fictional character (from universe point of view)
    """
    fictionalCharacter: Boolean

    """
    Gender
    """
    gender: Gender

    """
    Height in centimeters
    """
    height: Int

    """
    Whether this character is a hologram
    """
    hologram: Boolean

    """
    Hologram activation date
    """
    hologramActivationDate: String

    """
    Hologram date status
    """
    hologramDateStatus: String

    """
    Hologram status
    """
    hologramStatus: String

    """
    Marital status
    """
    maritalStatus: MaritalStatus

    """
    Whether this character is from mirror universe
    """
    mirror: Boolean

    """
    Month the character was born
    """
    monthOfBirth: Int

    """
    Month the character died
    """
    monthOfDeath: Int

    """
    Movies in which this character appeared
    """
    movies: [MovieBase]

    """
    Character name
    """
    name: String!

    """
    Occupations of this character
    """
    occupations: [OccupationBase]

    """
    Organizations this character has affiliation with
    """
    organizations: [OrganizationBase]

    """
    Performers who played this character
    """
    performers: [PerformerBase]

    """
    Place of birth
    """
    placeOfBirth: String

    """
    Place of death
    """
    placeOfDeath: String

    """
    Serial number
    """
    serialNumber: String

    """
    Titles this character holds
    """
    titles: [TitleBase]

    """
    Character unique ID
    """
    uid: String!

    """
    Weight in kilograms
    """
    weight: Int

    """
    Year the character was born
    """
    yearOfBirth: Int

    """
    Year the character died
    """
    yearOfDeath: Int
  }

  """
  Relation between characters
  """
  type CharacterRelation {
    """
    Header character, embedded in other objects
    """
    source: CharacterHeader

    """
    Header character, embedded in other objects
    """
    target: CharacterHeader

    """
    Relation type
    """
    type: String
  }

  """
  Header character, embedded in other objects
  """
  type CharacterHeader {
    """
    Character name
    """
    name: String!

    """
    Character unique ID
    """
    uid: String!
  }

  """
  Species a character belongs to
  """
  type CharacterSpecies2 {
    """
    Denominator
    """
    denominator: Int

    """
    Species name
    """
    name: String

    """
    Numerator
    """
    numerator: Int

    """
    Entity unique ID
    """
    uid: String
  }

  """
  Base episode, returned in search results
  """
  type EpisodeBase {
    """
    Episode number in season
    """
    episodeNumber: Int

    """
    Whether it's a feature length episode
    """
    featureLength: Boolean

    """
    Date the episode script was completed
    """
    finalScriptDate: String

    """
    Production serial number
    """
    productionSerialNumber: String

    """
    Header season, embedded in other objects
    """
    season: SeasonHeader

    """
    Season number
    """
    seasonNumber: Int

    """
    Header series, embedded in other objects
    """
    series: SeriesHeader

    """
    Starting stardate of episode story
    """
    stardateFrom: Float

    """
    Ending stardate of episode story
    """
    stardateTo: Float

    """
    Episode title
    """
    title: String!

    """
    Episode title in German
    """
    titleGerman: String

    """
    Episode title in Italian
    """
    titleItalian: String

    """
    Episode title in Japanese
    """
    titleJapanese: String

    """
    Episode unique ID
    """
    uid: String!

    """
    Date the episode was first aired in the United States
    """
    usAirDate: String

    """
    Starting year of episode story
    """
    yearFrom: Int

    """
    Ending year of episode story
    """
    yearTo: Int
  }

  """
  Header season, embedded in other objects
  """
  type SeasonHeader {
    """
    Season title
    """
    title: String!

    """
    Season unique ID
    """
    uid: String!
  }

  """
  Header series, embedded in other objects
  """
  type SeriesHeader {
    """
    Series title
    """
    title: String!

    """
    Series unique ID
    """
    uid: String!
  }

  """
  Base movie, returned in search results
  """
  type MovieBase {
    """
    Header staff, embedded in other objects
    """
    mainDirector: StaffHeader

    """
    Starting stardate of movie story
    """
    stardateFrom: Float

    """
    Ending stardate of movie story
    """
    stardateTo: Float

    """
    Movie title
    """
    title: String!

    """
    Movie title in Bulgarian
    """
    titleBulgarian: String

    """
    Movie title in Catalan
    """
    titleCatalan: String

    """
    Movie title in Chinese traditional
    """
    titleChineseTraditional: String

    """
    Movie title in German
    """
    titleGerman: String

    """
    Movie title in Italian
    """
    titleItalian: String

    """
    Movie title in Japanese
    """
    titleJapanese: String

    """
    Movie title in Polish
    """
    titlePolish: String

    """
    Movie title in Russian
    """
    titleRussian: String

    """
    Movie title in Serbian
    """
    titleSerbian: String

    """
    Movie title in Spanish
    """
    titleSpanish: String

    """
    Movie unique ID
    """
    uid: String!

    """
    Date the movie was first released in the United States
    """
    usReleaseDate: String

    """
    Starting year of movie story
    """
    yearFrom: Int

    """
    Ending year of movie story
    """
    yearTo: Int
  }

  """
  Header staff, embedded in other objects
  """
  type StaffHeader {
    """
    Staff name
    """
    name: String!

    """
    Staff unique ID
    """
    uid: String!
  }

  """
  Base occupations, returned in search results
  """
  type OccupationBase {
    """
    Whether it's a legal occupation
    """
    legalOccupation: Boolean

    """
    Whether it's a medical occupation
    """
    medicalOccupation: Boolean

    """
    Occupation name
    """
    name: String!

    """
    Whether it's a scientific occupation
    """
    scientificOccupation: Boolean

    """
    Occupation unique ID
    """
    uid: String!
  }

  """
  Base organization, returned in search results
  """
  type OrganizationBase {
    """
    Whether this location is from alternate reality
    """
    alternateReality: Boolean

    """
    Whether it's a government
    """
    government: Boolean

    """
    Whether it's a government agency
    """
    governmentAgency: Boolean

    """
    Whether it's an intergovernmental organization
    """
    intergovernmentalOrganization: Boolean

    """
    Whether it's a law enforcement agency
    """
    lawEnforcementAgency: Boolean

    """
    Whether it's a medical organization
    """
    medicalOrganization: Boolean

    """
    Whether it's a military organization
    """
    militaryOrganization: Boolean

    """
    Whether it's a military unit
    """
    militaryUnit: Boolean

    """
    Whether this organization is from mirror universe
    """
    mirror: Boolean

    """
    Organization name
    """
    name: String!

    """
    Whether it's a prison or penal colony
    """
    prisonOrPenalColony: Boolean

    """
    Whether it's a research organization
    """
    researchOrganization: Boolean

    """
    Whether it's a sport organization
    """
    sportOrganization: Boolean

    """
    Organization unique ID
    """
    uid: String!
  }

  """
  Base performer, returned in search results
  """
  type PerformerBase {
    """
    Whether it's an animal performer
    """
    animalPerformer: Boolean

    """
    Performer birth name
    """
    birthName: String

    """
    Date the performer was born
    """
    dateOfBirth: String

    """
    Date the performer died
    """
    dateOfDeath: String

    """
    Whether it's a performer that appeared in Star Trek: Discovery
    """
    disPerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: Deep Space Nine
    """
    ds9Performer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: Enterprise
    """
    entPerformer: Boolean

    """
    Whether it's a performer that appeared in a Star Trek movie
    """
    filmPerformer: Boolean

    """
    Gender
    """
    gender: Gender

    """
    Performer name
    """
    name: String!

    """
    Place the performer was born
    """
    placeOfBirth: String

    """
    Place the performer died
    """
    placeOfDeath: String

    """
    Whether it's a stand-in performer
    """
    standInPerformer: Boolean

    """
    Whether it's a stunt performer
    """
    stuntPerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: The Animated Series
    """
    tasPerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: The Next Generation
    """
    tngPerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: The Original Series
    """
    tosPerformer: Boolean

    """
    Performer unique ID
    """
    uid: String!

    """
    Whether it's a video game performer
    """
    videoGamePerformer: Boolean

    """
    Whether it's a voice performer
    """
    voicePerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: Voyager
    """
    voyPerformer: Boolean
  }

  """
  Base title, returned in search results
  """
  type TitleBase {
    """
    Whether it's a fleet rank
    """
    fleetRank: Boolean

    """
    Whether it's a military rank
    """
    militaryRank: Boolean

    """
    Whether this title is from mirror universe
    """
    mirror: Boolean

    """
    Title name
    """
    name: String!

    """
    Whether it's a position
    """
    position: Boolean

    """
    Whether it's a religious title
    """
    religiousTitle: Boolean

    """
    Title unique ID
    """
    uid: String!
  }

  """
  Response object for comic collections search
  """
  type ComicCollectionBaseResponse {
    """
    List of comic collections matching given criteria
    """
    comicCollections: [ComicCollectionBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Base comic collection, returned in search results
  """
  type ComicCollectionBase {
    """
    Cover publication day
    """
    coverDay: Int

    """
    Cover publication month
    """
    coverMonth: Int

    """
    Cover publication year
    """
    coverYear: Int

    """
    Number of pages
    """
    numberOfPages: Int

    """
    Whether it's a photonovel collection
    """
    photonovel: Boolean

    """
    Day the comic collection was published
    """
    publishedDay: Int

    """
    Month the comic collection was published
    """
    publishedMonth: Int

    """
    Year the comic collection was published
    """
    publishedYear: Int

    """
    Starting stardate of comic collection stories
    """
    stardateFrom: Float

    """
    Ending stardate of comic collection stories
    """
    stardateTo: Float

    """
    Comic collection title
    """
    title: String!

    """
    Comic collection unique ID
    """
    uid: String!

    """
    Starting year of comic collection stories
    """
    yearFrom: Int

    """
    Ending year of comic collection stories
    """
    yearTo: Int
  }

  """
  Response object for single comic collection query
  """
  type ComicCollectionFullResponse {
    """
    Full comic collection, returned when queried using UID
    """
    comicCollection: ComicCollectionFull
  }

  """
  Full comic collection, returned when queried using UID
  """
  type ComicCollectionFull {
    """
    Artists involved in the comic collection
    """
    artists: [StaffBase]

    """
    Characters appearing in the comic collection
    """
    characters: [CharacterBase]

    """
    Comic series this comic collection is included in
    """
    comicSeries: [ComicSeriesBase]

    """
    Comics included in this comic collection
    """
    comics: [ComicsBase]

    """
    Cover publication day
    """
    coverDay: Int

    """
    Cover publication month
    """
    coverMonth: Int

    """
    Cover publication year
    """
    coverYear: Int

    """
    Editors involved in the comic collection
    """
    editors: [StaffBase]

    """
    Number of pages
    """
    numberOfPages: Int

    """
    Whether it's a photonovel collection
    """
    photonovel: Boolean

    """
    Day the comic collection was published
    """
    publishedDay: Int

    """
    Month the comic collection was published
    """
    publishedMonth: Int

    """
    Year the comic collection was published
    """
    publishedYear: Int

    """
    Comic collection publishers
    """
    publishers: [CompanyBase]

    """
    References
    """
    references: [Reference]

    """
    Other staff involved in the comic collection
    """
    staff: [StaffBase]

    """
    Starting stardate of comic collection stories
    """
    stardateFrom: Float

    """
    Ending stardate of comic collection stories
    """
    stardateTo: Float

    """
    Comic collection title
    """
    title: String!

    """
    Comic collection unique ID
    """
    uid: String!

    """
    Writers involved in the comic collection
    """
    writers: [StaffBase]

    """
    Starting year of comic collection stories
    """
    yearFrom: Int

    """
    Ending year of comic collection stories
    """
    yearTo: Int
  }

  """
  Base comic series, returned in search results
  """
  type ComicSeriesBase {
    """
    Whether it's a miniseries
    """
    miniseries: Boolean

    """
    Number of issues
    """
    numberOfIssues: Int

    """
    Whether it's a photonovel series
    """
    photonovelSeries: Boolean

    """
    Day from which the comic series was published
    """
    publishedDayFrom: Int

    """
    Day to which the comic series was published
    """
    publishedDayTo: Int

    """
    Month from which the comic series was published
    """
    publishedMonthFrom: Int

    """
    Month to which the comic series was published
    """
    publishedMonthTo: Int

    """
    Year from which the comic series was published
    """
    publishedYearFrom: Int

    """
    Year to which the comic series was published
    """
    publishedYearTo: Int

    """
    Starting stardate of comic series stories
    """
    stardateFrom: Float

    """
    Ending stardate of comic series stories
    """
    stardateTo: Float

    """
    Comic series title
    """
    title: String!

    """
    Comic series unique ID
    """
    uid: String!

    """
    Starting year of comic series stories
    """
    yearFrom: Int

    """
    Ending year of comic series stories
    """
    yearTo: Int
  }

  """
  Base comics, returned in search results
  """
  type ComicsBase {
    """
    Whether it's an adaptation of an episode or a movie
    """
    adaptation: Boolean

    """
    Cover publication day
    """
    coverDay: Int

    """
    Cover publication month
    """
    coverMonth: Int

    """
    Cover publication year
    """
    coverYear: Int

    """
    Number of pages
    """
    numberOfPages: Int

    """
    Whether it's a photonovel
    """
    photonovel: Boolean

    """
    Day the comics was published
    """
    publishedDay: Int

    """
    Month the comics was published
    """
    publishedMonth: Int

    """
    Year the comics was published
    """
    publishedYear: Int

    """
    Starting stardate of comic story
    """
    stardateFrom: Float

    """
    Ending stardate of comic story
    """
    stardateTo: Float

    """
    Comics title
    """
    title: String!

    """
    Comics unique ID
    """
    uid: String!

    """
    Starting year of comic story
    """
    yearFrom: Int

    """
    Ending year of comic story
    """
    yearTo: Int
  }

  """
  Response object for single comic collection query (V2)
  """
  type ComicCollectionV2FullResponse {
    """
    Full comic collection, returned when queried using UID (V2)
    """
    comicCollection: ComicCollectionV2Full
  }

  """
  Full comic collection, returned when queried using UID (V2)
  """
  type ComicCollectionV2Full {
    """
    Artists involved in the comic collection
    """
    artists: [StaffV2Base]

    """
    Characters appearing in the comic collection
    """
    characters: [CharacterBase]

    """
    Comic series this comic collection includes
    """
    childComicSeries: [ComicSeriesBase]

    """
    Comic series this comic collection is included in
    """
    comicSeries: [ComicSeriesBase]

    """
    Comics included in this comic collection
    """
    comics: [ComicsBase]

    """
    Cover publication day
    """
    coverDay: Int

    """
    Cover publication month
    """
    coverMonth: Int

    """
    Cover publication year
    """
    coverYear: Int

    """
    Editors involved in the comic collection
    """
    editors: [StaffV2Base]

    """
    Number of pages
    """
    numberOfPages: Int

    """
    Whether it's a photonovel collection
    """
    photonovel: Boolean

    """
    Day the comic collection was published
    """
    publishedDay: Int

    """
    Month the comic collection was published
    """
    publishedMonth: Int

    """
    Year the comic collection was published
    """
    publishedYear: Int

    """
    Comic collection publishers
    """
    publishers: [CompanyV2Base]

    """
    References
    """
    references: [Reference]

    """
    Other staff involved in the comic collection
    """
    staff: [StaffV2Base]

    """
    Starting stardate of comic collection stories
    """
    stardateFrom: Float

    """
    Ending stardate of comic collection stories
    """
    stardateTo: Float

    """
    Comic collection title
    """
    title: String!

    """
    Comic collection unique ID
    """
    uid: String!

    """
    Writers involved in the comic collection
    """
    writers: [StaffV2Base]

    """
    Starting year of comic collection stories
    """
    yearFrom: Int

    """
    Ending year of comic collection stories
    """
    yearTo: Int
  }

  """
  Response object for comic series search
  """
  type ComicSeriesBaseResponse {
    """
    List of comic series matching given criteria
    """
    comicSeries: [ComicSeriesBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Response object for single comic series query
  """
  type ComicSeriesFullResponse {
    """
    Full comic series, returned when queried using UID
    """
    comicSeries: ComicSeriesFull
  }

  """
  Full comic series, returned when queried using UID
  """
  type ComicSeriesFull {
    """
    Child comic series included in this comic series
    """
    childSeries: [ComicSeriesBase]

    """
    Comics included in this comic series
    """
    comics: [ComicsBase]

    """
    Whether it's a miniseries
    """
    miniseries: Boolean

    """
    Number of issues
    """
    numberOfIssues: Int

    """
    Comic series this comic series is included in
    """
    parentSeries: [ComicSeriesBase]

    """
    Whether it's a photonovel series
    """
    photonovelSeries: Boolean

    """
    Day from which the comic series was published
    """
    publishedDayFrom: Int

    """
    Day to which the comic series was published
    """
    publishedDayTo: Int

    """
    Month from which the comic series was published
    """
    publishedMonthFrom: Int

    """
    Month to which the comic series was published
    """
    publishedMonthTo: Int

    """
    Year from which the comic series was published
    """
    publishedYearFrom: Int

    """
    Year to which the comic series was published
    """
    publishedYearTo: Int

    """
    Companies that published this comic series
    """
    publishers: [CompanyBase]

    """
    Starting stardate of comic series stories
    """
    stardateFrom: Float

    """
    Ending stardate of comic series stories
    """
    stardateTo: Float

    """
    Comic series title
    """
    title: String!

    """
    Comic series unique ID
    """
    uid: String!

    """
    Starting year of comic series stories
    """
    yearFrom: Int

    """
    Ending year of comic series stories
    """
    yearTo: Int
  }

  """
  Response object for comic strip search
  """
  type ComicStripBaseResponse {
    """
    List of comic strips matching given criteria
    """
    comicStrips: [ComicStripBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Base comic strip, returned in search results
  """
  type ComicStripBase {
    """
    Number of pages
    """
    numberOfPages: Int

    """
    Title of the periodical the comic strip was published in
    """
    periodical: String

    """
    Day from which the comic strip was published
    """
    publishedDayFrom: Int

    """
    Day to which the comic strip was published
    """
    publishedDayTo: Int

    """
    Month from which the comic strip was published
    """
    publishedMonthFrom: Int

    """
    Month to which the comic strip was published
    """
    publishedMonthTo: Int

    """
    Year from which the comic strip was published
    """
    publishedYearFrom: Int

    """
    Year to which the comic strip was published
    """
    publishedYearTo: Int

    """
    Comic strip title
    """
    title: String!

    """
    Comic strip unique ID
    """
    uid: String!

    """
    Starting year of comic strip story
    """
    yearFrom: Int

    """
    Ending year of comic strip story
    """
    yearTo: Int
  }

  """
  Response object for single comic strip query
  """
  type ComicStripFullResponse {
    """
    Full comic strip, returned when queried using UID
    """
    comicStrip: ComicStripFull
  }

  """
  Full comic strip, returned when queried using UID
  """
  type ComicStripFull {
    """
    Artists involved in the comic strip
    """
    artists: [StaffBase]

    """
    Characters appearing in the comic strip
    """
    characters: [CharacterBase]

    """
    Comic series this comic strip is included in
    """
    comicSeries: [ComicSeriesBase]

    """
    Number of pages
    """
    numberOfPages: Int

    """
    Title of the periodical the comic strip was published in
    """
    periodical: String

    """
    Day from which the comic strip was published
    """
    publishedDayFrom: Int

    """
    Day to which the comic strip was published
    """
    publishedDayTo: Int

    """
    Month from which the comic strip was published
    """
    publishedMonthFrom: Int

    """
    Month to which the comic strip was published
    """
    publishedMonthTo: Int

    """
    Year from which the comic strip was published
    """
    publishedYearFrom: Int

    """
    Year to which the comic strip was published
    """
    publishedYearTo: Int

    """
    Comic strip title
    """
    title: String!

    """
    Comic strip unique ID
    """
    uid: String!

    """
    Writers involved in the comic strip
    """
    writers: [StaffBase]

    """
    Starting year of comic strip stories
    """
    yearFrom: Int

    """
    Ending year of comic strip stories
    """
    yearTo: Int
  }

  """
  Response object for comics search
  """
  type ComicsBaseResponse {
    """
    List of comics matching given criteria
    """
    comics: [ComicsBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Response object for single comics query
  """
  type ComicsFullResponse {
    """
    Full comics, returned when queried using UID
    """
    comics: ComicsFull
  }

  """
  Full comics, returned when queried using UID
  """
  type ComicsFull {
    """
    Whether it's an adaptation of an episode or a movie
    """
    adaptation: Boolean

    """
    Artists involved in the comics
    """
    artists: [StaffBase]

    """
    Characters appearing in the comics
    """
    characters: [CharacterBase]

    """
    Comic collections this comics is included in
    """
    comicCollections: [ComicCollectionBase]

    """
    Comic series this comics is included in
    """
    comicSeries: [ComicSeriesBase]

    """
    Cover publication day
    """
    coverDay: Int

    """
    Cover publication month
    """
    coverMonth: Int

    """
    Cover publication year
    """
    coverYear: Int

    """
    Editors involved in the comics
    """
    editors: [StaffBase]

    """
    Number of pages
    """
    numberOfPages: Int

    """
    Whether it's a photonovel
    """
    photonovel: Boolean

    """
    Day the comics was published
    """
    publishedDay: Int

    """
    Month the comics was published
    """
    publishedMonth: Int

    """
    Year the comics was published
    """
    publishedYear: Int

    """
    Comics publishers
    """
    publishers: [CompanyBase]

    """
    References
    """
    references: [Reference]

    """
    Other staff involved in the comics
    """
    staff: [StaffBase]

    """
    Starting stardate of comic story
    """
    stardateFrom: Float

    """
    Ending stardate of comic story
    """
    stardateTo: Float

    """
    Comics title
    """
    title: String!

    """
    Comics unique ID
    """
    uid: String!

    """
    Writers involved in the comics
    """
    writers: [StaffBase]

    """
    Starting year of comic  story
    """
    yearFrom: Int

    """
    Ending year of comic story
    """
    yearTo: Int
  }

  """
  Response object for companies search
  """
  type CompanyBaseResponse {
    """
    List of companies matching given criteria
    """
    companies: [CompanyBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Response object for single company query
  """
  type CompanyFullResponse {
    """
    Full company, returned when queried using UID
    """
    company: CompanyFull
  }

  """
  Full company, returned when queried using UID
  """
  type CompanyFull {
    """
    Whether it's a broadcaster
    """
    broadcaster: Boolean

    """
    Whether it's a collectible company
    """
    collectibleCompany: Boolean

    """
    Whether it's a conglomerate
    """
    conglomerate: Boolean

    """
    Whether it's a digital visual effects company
    """
    digitalVisualEffectsCompany: Boolean

    """
    Whether it's a distributor
    """
    distributor: Boolean

    """
    Whether it's a film equipment company
    """
    filmEquipmentCompany: Boolean

    """
    Whether it's a game company
    """
    gameCompany: Boolean

    """
    Whether it's a make-up effects studio
    """
    makeUpEffectsStudio: Boolean

    """
    Whether it's a matte painting company
    """
    mattePaintingCompany: Boolean

    """
    Whether it's a model and miniature effects company
    """
    modelAndMiniatureEffectsCompany: Boolean

    """
    Company name
    """
    name: String!

    """
    Whether it's a post-production company
    """
    postProductionCompany: Boolean

    """
    Whether it's a production company
    """
    productionCompany: Boolean

    """
    Whether it's a prop company
    """
    propCompany: Boolean

    """
    Whether it's a record label
    """
    recordLabel: Boolean

    """
    Whether it's a special effects company
    """
    specialEffectsCompany: Boolean

    """
    Whether it's a TV and film production company
    """
    tvAndFilmProductionCompany: Boolean

    """
    Company unique ID
    """
    uid: String!

    """
    Whether it's a video game company
    """
    videoGameCompany: Boolean
  }

  """
  Response object for companies search (V2)
  """
  type CompanyV2BaseResponse {
    """
    List of companies matching given criteria
    """
    companies: [CompanyV2Base]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Response object for single company query (V2)
  """
  type CompanyV2FullResponse {
    """
    Full company, returned when queried using UID (V2)
    """
    company: CompanyV2Full
  }

  """
  Full company, returned when queried using UID (V2)
  """
  type CompanyV2Full {
    """
    Whether it's a broadcaster
    """
    broadcaster: Boolean

    """
    Whether it's a collectible company
    """
    collectibleCompany: Boolean

    """
    Whether it's a conglomerate
    """
    conglomerate: Boolean

    """
    Whether it's a digital visual effects company
    """
    digitalVisualEffectsCompany: Boolean

    """
    Whether it's a distributor
    """
    distributor: Boolean

    """
    Whether it's a film equipment company
    """
    filmEquipmentCompany: Boolean

    """
    Whether it's a game company
    """
    gameCompany: Boolean

    """
    Whether it's a make-up effects studio
    """
    makeUpEffectsStudio: Boolean

    """
    Whether it's a matte painting company
    """
    mattePaintingCompany: Boolean

    """
    Whether it's a model and miniature effects company
    """
    modelAndMiniatureEffectsCompany: Boolean

    """
    Company name
    """
    name: String!

    """
    Whether it's a post-production company
    """
    postProductionCompany: Boolean

    """
    Whether it's a production company
    """
    productionCompany: Boolean

    """
    Whether it's a prop company
    """
    propCompany: Boolean

    """
    Whether it's a publication art studio
    """
    publicationArtStudio: Boolean

    """
    Whether it's a publisher
    """
    publisher: Boolean

    """
    Whether it's a record label
    """
    recordLabel: Boolean

    """
    Whether it's a special effects company
    """
    specialEffectsCompany: Boolean

    """
    Whether it's a streaming service
    """
    streamingService: Boolean

    """
    Whether it's a TV and film production company
    """
    tvAndFilmProductionCompany: Boolean

    """
    Company unique ID
    """
    uid: String!

    """
    Whether it's a video game company
    """
    videoGameCompany: Boolean

    """
    Whether it's a visual effects company
    """
    visualEffectsCompany: Boolean
  }

  """
  Response object for conflicts search
  """
  type ConflictBaseResponse {
    """
    List of conflicts matching given criteria
    """
    conflicts: [ConflictBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Base conflict, returned in search results
  """
  type ConflictBase {
    """
    Whether this conflict is from alternate reality
    """
    alternateReality: Boolean

    """
    Whether this conflict is a Dominion war battle
    """
    dominionWarBattle: Boolean

    """
    Whether it was an Earth conflict
    """
    earthConflict: Boolean

    """
    Whether this conflict is part of war involving Federation
    """
    federationWar: Boolean

    """
    Whether this conflict is part of war involving the Klingons
    """
    klingonWar: Boolean

    """
    Conflict name
    """
    name: String!

    """
    Conflict unique ID
    """
    uid: String!

    """
    Starting year of the conflict
    """
    yearFrom: Int

    """
    Ending year of the conflict
    """
    yearTo: Int
  }

  """
  Response object for single conflict query
  """
  type ConflictFullResponse {
    """
    Base conflict, returned in search results
    """
    conflict: ConflictFull
  }

  """
  Base conflict, returned in search results
  """
  type ConflictFull {
    """
    Whether this conflict is from alternate reality
    """
    alternateReality: Boolean

    """
    Whether this conflict is a Dominion war battle
    """
    dominionWarBattle: Boolean

    """
    Whether it is an Earth conflict
    """
    earthConflict: Boolean

    """
    Whether this conflict is a part of war involving Federation
    """
    federationWar: Boolean

    """
    Organization involved in conflict on first side
    """
    firstSideBelligerents: [OrganizationBase]

    """
    Commanders involved in conflict on first side
    """
    firstSideCommanders: [CharacterBase]

    """
    Whether this conflict is a part of war involving the Klingons
    """
    klingonWar: Boolean

    """
    Locations this conflict occurred at
    """
    locations: [LocationBase]

    """
    Conflict name
    """
    name: String!

    """
    Organization involved in conflict on second side
    """
    secondSideBelligerents: [OrganizationBase]

    """
    Commanders involved in conflict on second side
    """
    secondSideCommanders: [CharacterBase]

    """
    Conflict unique ID
    """
    uid: String!

    """
    Starting year of the conflict
    """
    yearFrom: Int

    """
    Ending year of the conflict
    """
    yearTo: Int
  }

  """
  Base location, returned in search results
  """
  type LocationBase {
    """
    Whether this location is from alternate reality
    """
    alternateReality: Boolean

    """
    Whether it's a Bajoran settlement
    """
    bajoranSettlement: Boolean

    """
    Whether it's a body of water
    """
    bodyOfWater: Boolean

    """
    Whether it's a building interior
    """
    buildingInterior: Boolean

    """
    Whether it's a colony
    """
    colony: Boolean

    """
    Whether it's a country
    """
    country: Boolean

    """
    Whether it's a DS9 establishment
    """
    ds9Establishment: Boolean

    """
    Whether it's an earthly location
    """
    earthlyLocation: Boolean

    """
    Whether it's a establishment
    """
    establishment: Boolean

    """
    Whether it's a fictional location
    """
    fictionalLocation: Boolean

    """
    Whether it's a geographical location
    """
    geographicalLocation: Boolean

    """
    Whether it's a landform
    """
    landform: Boolean

    """
    Whether it's a landmark
    """
    landmark: Boolean

    """
    Whether it's a medical establishment
    """
    medicalEstablishment: Boolean

    """
    Whether this location is from mirror universe
    """
    mirror: Boolean

    """
    Location name
    """
    name: String!

    """
    Whether it's a religious location
    """
    religiousLocation: Boolean

    """
    Whether it's a road
    """
    road: Boolean

    """
    Whether it's a school
    """
    school: Boolean

    """
    Whether it's a settlement
    """
    settlement: Boolean

    """
    Whether it's a shipyard
    """
    shipyard: Boolean

    """
    Whether it's a structure
    """
    structure: Boolean

    """
    Whether it's a subnational entity
    """
    subnationalEntity: Boolean

    """
    Location unique ID
    """
    uid: String!

    """
    Whether it's a US settlement
    """
    usSettlement: Boolean
  }

  """
  Response object for single conflict query (V2)
  """
  type ConflictV2FullResponse {
    """
    Base conflict, returned in search results (V2)
    """
    conflict: ConflictV2Full
  }

  """
  Base conflict, returned in search results (V2)
  """
  type ConflictV2Full {
    """
    Whether this conflict is from alternate reality
    """
    alternateReality: Boolean

    """
    Whether this conflict is a Dominion war battle
    """
    dominionWarBattle: Boolean

    """
    Whether it is an Earth conflict
    """
    earthConflict: Boolean

    """
    Whether this conflict is a part of war involving Federation
    """
    federationWar: Boolean

    """
    Organization involved in conflict on first side
    """
    firstSideBelligerents: [OrganizationBase]

    """
    Commanders involved in conflict on first side
    """
    firstSideCommanders: [CharacterBase]

    """
    Locations involved in conflict on first side
    """
    firstSideLocations: [LocationV2Base]

    """
    Whether this conflict is a part of war involving the Klingons
    """
    klingonWar: Boolean

    """
    Locations this conflict occurred at
    """
    locations: [LocationBase]

    """
    Conflict name
    """
    name: String!

    """
    Organization involved in conflict on second side
    """
    secondSideBelligerents: [OrganizationBase]

    """
    Commanders involved in conflict on second side
    """
    secondSideCommanders: [CharacterBase]

    """
    Locations involved in conflict on second side
    """
    secondSideLocations: [LocationV2Base]

    """
    Conflict unique ID
    """
    uid: String!

    """
    Starting year of the conflict
    """
    yearFrom: Int

    """
    Ending year of the conflict
    """
    yearTo: Int
  }

  """
  Base location, returned in search results (v2)
  """
  type LocationV2Base {
    """
    Whether this location is from alternate reality
    """
    alternateReality: Boolean

    """
    Whether it's a Bajoran settlement
    """
    bajoranSettlement: Boolean

    """
    Whether it's a body of water
    """
    bodyOfWater: Boolean

    """
    Whether it's a building interior
    """
    buildingInterior: Boolean

    """
    Whether it's a colony
    """
    colony: Boolean

    """
    Whether it's a country
    """
    country: Boolean

    """
    Whether it's a DS9 establishment
    """
    ds9Establishment: Boolean

    """
    Whether it's an earthly location
    """
    earthlyLocation: Boolean

    """
    Whether it's a establishment
    """
    establishment: Boolean

    """
    Whether it's a fictional location
    """
    fictionalLocation: Boolean

    """
    Whether it's a geographical location
    """
    geographicalLocation: Boolean

    """
    Whether it's a landform
    """
    landform: Boolean

    """
    Whether it's a medical establishment
    """
    medicalEstablishment: Boolean

    """
    Whether this location is from mirror universe
    """
    mirror: Boolean

    """
    Whether it's a mythological location
    """
    mythologicalLocation: Boolean

    """
    Location name
    """
    name: String!

    """
    Whether it's a Qo'noS location
    """
    qonosLocation: Boolean

    """
    Whether it's a religious location
    """
    religiousLocation: Boolean

    """
    Whether it's a residence
    """
    residence: Boolean

    """
    Whether it's a restaurant
    """
    restaurant: Boolean

    """
    Whether it's a road
    """
    road: Boolean

    """
    Whether it's a school
    """
    school: Boolean

    """
    Whether it's a settlement
    """
    settlement: Boolean

    """
    Whether it's a shipyard
    """
    shipyard: Boolean

    """
    Whether it's a structure
    """
    structure: Boolean

    """
    Whether it's a subnational entity
    """
    subnationalEntity: Boolean

    """
    Location unique ID
    """
    uid: String!

    """
    Whether it's a US settlement
    """
    usSettlement: Boolean
  }

  """
  Data version
  """
  type DataVersion {
    """
    Version of the data served by this STAPI instance
    """
    dataVersion: String!
  }

  """
  Response object for elements search
  """
  type ElementBaseResponse {
    """
    List of elements matching given criteria
    """
    elements: [ElementBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Base element, returned in search results
  """
  type ElementBase {
    """
    Element atomic number
    """
    atomicNumber: Int

    """
    Element atomic weight
    """
    atomicWeight: Int

    """
    Whether it belongs to Gamma series
    """
    gammaSeries: Boolean

    """
    Whether it belongs to Hypersonic series
    """
    hypersonicSeries: Boolean

    """
    Whether it belongs to Mega series
    """
    megaSeries: Boolean

    """
    Element name
    """
    name: String!

    """
    Whether it belongs to Omega series
    """
    omegaSeries: Boolean

    """
    Element symbol
    """
    symbol: String

    """
    Whether it belongs to Transonic series
    """
    transonicSeries: Boolean

    """
    Whether it's a transuranium
    """
    transuranium: Boolean

    """
    Element unique ID
    """
    uid: String!

    """
    Whether it belongs to World series
    """
    worldSeries: Boolean
  }

  """
  Response object for single element query
  """
  type ElementFullResponse {
    """
    Full element, returned when queried using UID
    """
    element: ElementFull
  }

  """
  Full element, returned when queried using UID
  """
  type ElementFull {
    """
    Element atomic number
    """
    atomicNumber: Int

    """
    Element atomic weight
    """
    atomicWeight: Int

    """
    Whether it belongs to Gamma series
    """
    gammaSeries: Boolean

    """
    Whether it belongs to Hypersonic series
    """
    hypersonicSeries: Boolean

    """
    Whether it belongs to Mega series
    """
    megaSeries: Boolean

    """
    Element name
    """
    name: String!

    """
    Whether it belongs to Omega series
    """
    omegaSeries: Boolean

    """
    Element symbol
    """
    symbol: String

    """
    Whether it belongs to Transonic series
    """
    transonicSeries: Boolean

    """
    Whether it's a transuranium
    """
    transuranium: Boolean

    """
    Element unique ID
    """
    uid: String!

    """
    Whether it belongs to World series
    """
    worldSeries: Boolean
  }

  """
  Response object for elements search (V2)
  """
  type ElementV2BaseResponse {
    """
    List of elements matching given criteria
    """
    elements: [ElementV2Base]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Base element, returned in search results (v2)
  """
  type ElementV2Base {
    """
    Element atomic number
    """
    atomicNumber: Int

    """
    Element atomic weight
    """
    atomicWeight: Int

    """
    Whether it belongs to Gamma series
    """
    gammaSeries: Boolean

    """
    Whether it belongs to Hypersonic series
    """
    hypersonicSeries: Boolean

    """
    Whether it belongs to Mega series
    """
    megaSeries: Boolean

    """
    Element name
    """
    name: String!

    """
    Whether it belongs to Omega series
    """
    omegaSeries: Boolean

    """
    Element symbol
    """
    symbol: String

    """
    Whether it belongs to Transonic series
    """
    transonicSeries: Boolean

    """
    Whether it's a transuranic
    """
    transuranic: Boolean

    """
    Element unique ID
    """
    uid: String!

    """
    Whether it belongs to World series
    """
    worldSeries: Boolean
  }

  """
  Response object for single element query (V2)
  """
  type ElementV2FullResponse {
    """
    Full element, returned when queried using UID (V2)
    """
    element: ElementV2Full
  }

  """
  Full element, returned when queried using UID (V2)
  """
  type ElementV2Full {
    """
    Element atomic number
    """
    atomicNumber: Int

    """
    Element atomic weight
    """
    atomicWeight: Int

    """
    Whether it belongs to Gamma series
    """
    gammaSeries: Boolean

    """
    Whether it belongs to Hypersonic series
    """
    hypersonicSeries: Boolean

    """
    Whether it belongs to Mega series
    """
    megaSeries: Boolean

    """
    Element name
    """
    name: String!

    """
    Whether it belongs to Omega series
    """
    omegaSeries: Boolean

    """
    Element symbol
    """
    symbol: String

    """
    Whether it belongs to Transonic series
    """
    transonicSeries: Boolean

    """
    Whether it's a transuranic
    """
    transuranic: Boolean

    """
    Element unique ID
    """
    uid: String!

    """
    Whether it belongs to World series
    """
    worldSeries: Boolean
  }

  """
  Response object for episodes search
  """
  type EpisodeBaseResponse {
    """
    List of episodes matching given criteria
    """
    episodes: [EpisodeBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Response object for single episode query
  """
  type EpisodeFullResponse {
    """
    Full episode, returned when queried using UID
    """
    episode: EpisodeFull
  }

  """
  Full episode, returned when queried using UID
  """
  type EpisodeFull {
    """
    Characters appearing in the episode
    """
    characters: [CharacterBase]

    """
    Directors authors involved in the episode
    """
    directors: [StaffBase]

    """
    Episode number in season
    """
    episodeNumber: Int

    """
    Whether it's a feature length episode
    """
    featureLength: Boolean

    """
    Date the episode script was completed
    """
    finalScriptDate: String

    """
    Performers appearing in the episode
    """
    performers: [PerformerBase]

    """
    Production serial number
    """
    productionSerialNumber: String

    """
    Base season, returned in search results
    """
    season: SeasonBase

    """
    Season number
    """
    seasonNumber: Int

    """
    Base series, returned in search results
    """
    series: SeriesBase

    """
    Stand-in performers appearing in the episode
    """
    standInPerformers: [PerformerBase]

    """
    Starting stardate of episode story
    """
    stardateFrom: Float

    """
    Ending stardate of episode story
    """
    stardateTo: Float

    """
    Story authors involved in the episode
    """
    storyAuthors: [StaffBase]

    """
    Stunt performers appearing in the episode
    """
    stuntPerformers: [PerformerBase]

    """
    Teleplay authors involved in the episode
    """
    teleplayAuthors: [StaffBase]

    """
    Episode title
    """
    title: String!

    """
    Episode title in German
    """
    titleGerman: String

    """
    Episode title in Italian
    """
    titleItalian: String

    """
    Episode title in Japanese
    """
    titleJapanese: String

    """
    Episode unique ID
    """
    uid: String!

    """
    Date the episode was first aired in the United States
    """
    usAirDate: String

    """
    Writers involved in the episode
    """
    writers: [StaffBase]

    """
    Starting year of episode story
    """
    yearFrom: Int

    """
    Ending year of episode story
    """
    yearTo: Int
  }

  """
  Base season, returned in search results
  """
  type SeasonBase {
    """
    Number of episodes in this season
    """
    numberOfEpisodes: Int

    """
    Season number in series
    """
    seasonNumber: Int

    """
    Header series, embedded in other objects
    """
    series: SeriesHeader

    """
    Season title
    """
    title: String!

    """
    Season unique ID
    """
    uid: String!
  }

  """
  Base series, returned in search results
  """
  type SeriesBase {
    """
    Series abbreviation
    """
    abbreviation: String!

    """
    Number of episodes
    """
    episodesCount: Int

    """
    Number of feature length episodes
    """
    featureLengthEpisodesCount: Int

    """
    Header company, embedded in other objects
    """
    originalBroadcaster: CompanyHeader

    """
    Date the series originally ran to
    """
    originalRunEndDate: String

    """
    Date the series originally ran from
    """
    originalRunStartDate: String

    """
    Header company, embedded in other objects
    """
    productionCompany: CompanyHeader

    """
    Year the series production ended
    """
    productionEndYear: Int

    """
    Year the series production started
    """
    productionStartYear: Int

    """
    Number of seasons
    """
    seasonsCount: Int

    """
    Series title
    """
    title: String!

    """
    Series unique ID
    """
    uid: String!
  }

  """
  Header company, embedded in other objects
  """
  type CompanyHeader {
    """
    Company title
    """
    name: String!

    """
    Company unique ID
    """
    uid: String!
  }

  """
  Response object for foods search
  """
  type FoodBaseResponse {
    """
    List of foods matching given criteria
    """
    foods: [FoodBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Base food, returned in search results
  """
  type FoodBase {
    """
    Whether it's an alcoholic beverage
    """
    alcoholicBeverage: Boolean

    """
    Whether it's a beverage
    """
    beverage: Boolean

    """
    Whether it's a dessert
    """
    dessert: Boolean

    """
    Whether it's of earthly origin
    """
    earthlyOrigin: Boolean

    """
    Whether it's a fruit
    """
    fruit: Boolean

    """
    Whether it's a herb or a spice
    """
    herbOrSpice: Boolean

    """
    Whether it's a juice
    """
    juice: Boolean

    """
    Food name
    """
    name: String!

    """
    Whether it's a sauce
    """
    sauce: Boolean

    """
    Whether it's a soup
    """
    soup: Boolean

    """
    Whether it's a tea
    """
    tea: Boolean

    """
    Food unique ID
    """
    uid: String!
  }

  """
  Response object for single food query
  """
  type FoodFullResponse {
    """
    Full food, returned when queried using UID
    """
    food: FoodFull
  }

  """
  Full food, returned when queried using UID
  """
  type FoodFull {
    """
    Whether it's an alcoholic beverage
    """
    alcoholicBeverage: Boolean

    """
    Whether it's a beverage
    """
    beverage: Boolean

    """
    Whether it's a dessert
    """
    dessert: Boolean

    """
    Whether it's of earthly origin
    """
    earthlyOrigin: Boolean

    """
    Whether it's a fruit
    """
    fruit: Boolean

    """
    Whether it's an herb or a spice
    """
    herbOrSpice: Boolean

    """
    Whether it's a juice
    """
    juice: Boolean

    """
    Food name
    """
    name: String!

    """
    Whether it's a sauce
    """
    sauce: Boolean

    """
    Whether it's a soup
    """
    soup: Boolean

    """
    Whether it's a tea
    """
    tea: Boolean

    """
    Food unique ID
    """
    uid: String!
  }

  """
  Response object for literature search
  """
  type LiteratureBaseResponse {
    """
    List of literature matching given criteria
    """
    literature: [LiteratureBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Base literature, returned in search results
  """
  type LiteratureBase {
    """
    Whether it's of earthly origin
    """
    earthlyOrigin: Boolean

    """
    Whether it's a religious literature
    """
    religiousLiterature: Boolean

    """
    Whether it's a report
    """
    report: Boolean

    """
    Whether it's a scientific literature
    """
    scientificLiterature: Boolean

    """
    Whether it's a Shakespearean work
    """
    shakespeareanWork: Boolean

    """
    Whether it's a technical manual
    """
    technicalManual: Boolean

    """
    Literature title
    """
    title: String!

    """
    Literature unique ID
    """
    uid: String!
  }

  """
  Response object for single literature query
  """
  type LiteratureFullResponse {
    """
    Full literature, returned when queried using UID
    """
    literature: LiteratureFull
  }

  """
  Full literature, returned when queried using UID
  """
  type LiteratureFull {
    """
    Whether it's of earthly origin
    """
    earthlyOrigin: Boolean

    """
    Whether it's a religious literature
    """
    religiousLiterature: Boolean

    """
    Whether it's a report
    """
    report: Boolean

    """
    Whether it's a scientific literature
    """
    scientificLiterature: Boolean

    """
    Whether it's a Shakespearean work
    """
    shakespeareanWork: Boolean

    """
    Whether it's a technical manual
    """
    technicalManual: Boolean

    """
    Literature title
    """
    title: String!

    """
    Literature unique ID
    """
    uid: String!
  }

  """
  Response object for locations search
  """
  type LocationBaseResponse {
    """
    List of locations matching given criteria
    """
    locations: [LocationBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Response object for single location query
  """
  type LocationFullResponse {
    """
    Full location, returned when queried using UID
    """
    location: LocationFull
  }

  """
  Full location, returned when queried using UID
  """
  type LocationFull {
    """
    Whether this location is from alternate reality
    """
    alternateReality: Boolean

    """
    Whether it's a Bajoran settlement
    """
    bajoranSettlement: Boolean

    """
    Whether it's a body of water
    """
    bodyOfWater: Boolean

    """
    Whether it's a building interior
    """
    buildingInterior: Boolean

    """
    Whether it's a colony
    """
    colony: Boolean

    """
    Whether it's a country
    """
    country: Boolean

    """
    Whether it's a DS9 establishment
    """
    ds9Establishment: Boolean

    """
    Whether it's an earthly location
    """
    earthlyLocation: Boolean

    """
    Whether it's a establishment
    """
    establishment: Boolean

    """
    Whether it's a fictional location
    """
    fictionalLocation: Boolean

    """
    Whether it's a geographical location
    """
    geographicalLocation: Boolean

    """
    Whether it's a landform
    """
    landform: Boolean

    """
    Whether it's a landmark
    """
    landmark: Boolean

    """
    Whether it's a medical establishment
    """
    medicalEstablishment: Boolean

    """
    Whether this location is from mirror universe
    """
    mirror: Boolean

    """
    Location name
    """
    name: String!

    """
    Whether it's a religious location
    """
    religiousLocation: Boolean

    """
    Whether it's a road
    """
    road: Boolean

    """
    Whether it's a school
    """
    school: Boolean

    """
    Whether it's a settlement
    """
    settlement: Boolean

    """
    Whether it's a shipyard
    """
    shipyard: Boolean

    """
    Whether it's a structure
    """
    structure: Boolean

    """
    Whether it's a subnational entity
    """
    subnationalEntity: Boolean

    """
    Location unique ID
    """
    uid: String!

    """
    Whether it's a US settlement
    """
    usSettlement: Boolean
  }

  """
  Response object for locations search (V2)
  """
  type LocationV2BaseResponse {
    """
    List of locations matching given criteria
    """
    locations: [LocationV2Base]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Response object for single location query (V2)
  """
  type LocationV2FullResponse {
    """
    Full location, returned when queried using UID (V2)
    """
    location: LocationV2Full
  }

  """
  Full location, returned when queried using UID (V2)
  """
  type LocationV2Full {
    """
    Whether this location is from alternate reality
    """
    alternateReality: Boolean

    """
    Whether it's a Bajoran settlement
    """
    bajoranSettlement: Boolean

    """
    Whether it's a body of water
    """
    bodyOfWater: Boolean

    """
    Whether it's a building interior
    """
    buildingInterior: Boolean

    """
    Whether it's a colony
    """
    colony: Boolean

    """
    Whether it's a country
    """
    country: Boolean

    """
    Whether it's a DS9 establishment
    """
    ds9Establishment: Boolean

    """
    Whether it's an earthly location
    """
    earthlyLocation: Boolean

    """
    Whether it's a establishment
    """
    establishment: Boolean

    """
    Whether it's a fictional location
    """
    fictionalLocation: Boolean

    """
    Whether it's a geographical location
    """
    geographicalLocation: Boolean

    """
    Whether it's a landform
    """
    landform: Boolean

    """
    Whether it's a medical establishment
    """
    medicalEstablishment: Boolean

    """
    Whether this location is from mirror universe
    """
    mirror: Boolean

    """
    Whether it's a mythological location
    """
    mythologicalLocation: Boolean

    """
    Location name
    """
    name: String!

    """
    Whether it's a Qo'noS location
    """
    qonosLocation: Boolean

    """
    Whether it's a religious location
    """
    religiousLocation: Boolean

    """
    Whether it's a residence
    """
    residence: Boolean

    """
    Whether it's a restaurant
    """
    restaurant: Boolean

    """
    Whether it's a road
    """
    road: Boolean

    """
    Whether it's a school
    """
    school: Boolean

    """
    Whether it's a settlement
    """
    settlement: Boolean

    """
    Whether it's a shipyard
    """
    shipyard: Boolean

    """
    Whether it's a structure
    """
    structure: Boolean

    """
    Whether it's a subnational entity
    """
    subnationalEntity: Boolean

    """
    Location unique ID
    """
    uid: String!

    """
    Whether it's a US settlement
    """
    usSettlement: Boolean
  }

  """
  Response object for magazine search
  """
  type MagazineBaseResponse {
    """
    List of magazines matching given criteria
    """
    magazines: [MagazineBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Base magazine, returned in search results
  """
  type MagazineBase {
    """
    Cover publication day
    """
    coverDay: Int

    """
    Cover publication month
    """
    coverMonth: Int

    """
    Cover publication year
    """
    coverYear: Int

    """
    Magazine issue number
    """
    issueNumber: String

    """
    Number of pages
    """
    numberOfPages: Int

    """
    Day the magazine was published
    """
    publishedDay: Int

    """
    Month the magazine was published
    """
    publishedMonth: Int

    """
    Year the magazine was published
    """
    publishedYear: Int

    """
    Magazine title
    """
    title: String!

    """
    Magazine unique ID
    """
    uid: String!
  }

  """
  Response object for single magazine query
  """
  type MagazineFullResponse {
    """
    Full magazine, returned when queried using UID
    """
    magazine: MagazineFull
  }

  """
  Full magazine, returned when queried using UID
  """
  type MagazineFull {
    """
    Cover publication day
    """
    coverDay: Int

    """
    Cover publication month
    """
    coverMonth: Int

    """
    Cover publication year
    """
    coverYear: Int

    """
    Editors involved in the magazine
    """
    editors: [StaffBase]

    """
    Magazine issue number
    """
    issueNumber: String

    """
    Magazine series this magazine is included in
    """
    magazineSeries: [MagazineSeriesBase]

    """
    Number of pages
    """
    numberOfPages: Int

    """
    Day the magazine was published
    """
    publishedDay: Int

    """
    Month the magazine was published
    """
    publishedMonth: Int

    """
    Year the magazine was published
    """
    publishedYear: Int

    """
    Magazine publishers
    """
    publishers: [CompanyBase]

    """
    Magazine title
    """
    title: String!

    """
    Magazine unique ID
    """
    uid: String!
  }

  """
  Base magazine series, returned in search results
  """
  type MagazineSeriesBase {
    """
    Number of issues
    """
    numberOfIssues: Int

    """
    Month from which the magazine series was published
    """
    publishedMonthFrom: Int

    """
    Month to which the magazine series was published
    """
    publishedMonthTo: Int

    """
    Year from which the magazine series was published
    """
    publishedYearFrom: Int

    """
    Year to which the magazine series was published
    """
    publishedYearTo: Int

    """
    Magazine series title
    """
    title: String!

    """
    Magazine series unique ID
    """
    uid: String!
  }

  """
  Response object for magazine series search
  """
  type MagazineSeriesBaseResponse {
    """
    List of magazine series matching given criteria
    """
    magazineSeries: [MagazineSeriesBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Response object for single magazine series query
  """
  type MagazineSeriesFullResponse {
    """
    Full magazine series, returned when queried using UID
    """
    magazineSeries: MagazineSeriesFull
  }

  """
  Full magazine series, returned when queried using UID
  """
  type MagazineSeriesFull {
    """
    Editors involved in the magazine series
    """
    editors: [StaffBase]

    """
    Magazines included in this magazine series
    """
    magazines: [MagazineBase]

    """
    Number of issues
    """
    numberOfIssues: Int

    """
    Month from which the magazine series was published
    """
    publishedMonthFrom: Int

    """
    Month to which the magazine series was published
    """
    publishedMonthTo: Int

    """
    Year from which the magazine series was published
    """
    publishedYearFrom: Int

    """
    Year to which the magazine series was published
    """
    publishedYearTo: Int

    """
    Companies that published this magazine series
    """
    publishers: [CompanyBase]

    """
    Magazine series title
    """
    title: String!

    """
    Magazine series unique ID
    """
    uid: String!
  }

  """
  Response object for materials search
  """
  type MaterialBaseResponse {
    """
    List of materials matching given criteria
    """
    materials: [MaterialBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Base material, returned in search results
  """
  type MaterialBase {
    """
    Whether it's an alloy or a composite
    """
    alloyOrComposite: Boolean

    """
    Whether it's a biochemical compound
    """
    biochemicalCompound: Boolean

    """
    Whether it's a chemical compound
    """
    chemicalCompound: Boolean

    """
    Whether it's a drug
    """
    drug: Boolean

    """
    Whether it's an explosive
    """
    explosive: Boolean

    """
    Whether it's a fuel
    """
    fuel: Boolean

    """
    Whether it's a gemstone
    """
    gemstone: Boolean

    """
    Whether it's a mineral
    """
    mineral: Boolean

    """
    Material name
    """
    name: String!

    """
    Whether it's a poisonous substance
    """
    poisonousSubstance: Boolean

    """
    Whether it's a precious material
    """
    preciousMaterial: Boolean

    """
    Material unique ID
    """
    uid: String!
  }

  """
  Response object for single material query
  """
  type MaterialFullResponse {
    """
    Full material, returned when queried using UID
    """
    material: MaterialFull
  }

  """
  Full material, returned when queried using UID
  """
  type MaterialFull {
    """
    Whether it's an alloy or a composite
    """
    alloyOrComposite: Boolean

    """
    Whether it's a biochemical compound
    """
    biochemicalCompound: Boolean

    """
    Whether it's a chemical compound
    """
    chemicalCompound: Boolean

    """
    Whether it's a drug
    """
    drug: Boolean

    """
    Whether it's an explosive
    """
    explosive: Boolean

    """
    Whether it's a fuel
    """
    fuel: Boolean

    """
    Whether it's a gemstone
    """
    gemstone: Boolean

    """
    Whether it's a mineral
    """
    mineral: Boolean

    """
    Material name
    """
    name: String!

    """
    Whether it's a poisonous substance
    """
    poisonousSubstance: Boolean

    """
    Whether it's a precious material
    """
    preciousMaterial: Boolean

    """
    Material unique ID
    """
    uid: String!
  }

  """
  Response object for medical conditions search
  """
  type MedicalConditionBaseResponse {
    """
    List of medical conditions matching given criteria
    """
    medicalConditions: [MedicalConditionBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Base medical condition, returned in search results
  """
  type MedicalConditionBase {
    """
    Medical condition name
    """
    name: String!

    """
    Whether it's a psychological condition
    """
    psychologicalCondition: Boolean

    """
    Medical condition unique ID
    """
    uid: String!
  }

  """
  Response object for single medical condition query
  """
  type MedicalConditionFullResponse {
    """
    Full medical condition, returned when queried using UID
    """
    medicalCondition: MedicalConditionFull
  }

  """
  Full medical condition, returned when queried using UID
  """
  type MedicalConditionFull {
    """
    Medical condition name
    """
    name: String!

    """
    Whether it's a psychological condition
    """
    psychologicalCondition: Boolean

    """
    Medical condition unique ID
    """
    uid: String!
  }

  """
  Response object for movies search
  """
  type MovieBaseResponse {
    """
    List of movies matching given criteria
    """
    movies: [MovieBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Response object for single movie query
  """
  type MovieFullResponse {
    """
    Full movie, returned when queried using UID
    """
    movie: MovieFull
  }

  """
  Full movie, returned when queried using UID
  """
  type MovieFull {
    """
    Characters appearing in the movie
    """
    characters: [CharacterBase]

    """
    Directors authors involved in the movie
    """
    directors: [StaffBase]

    """
    Base staff, returned in search results
    """
    mainDirector: StaffBase

    """
    Performers appearing in the movie
    """
    performers: [PerformerBase]

    """
    Producers authors involved in the movie
    """
    producers: [StaffBase]

    """
    Screenplay authors involved in the movie
    """
    screenplayAuthors: [StaffBase]

    """
    Other staff involved in the movie
    """
    staff: [StaffBase]

    """
    Stand-in performers appearing in the movie
    """
    standInPerformers: [PerformerBase]

    """
    Starting stardate of movie story
    """
    stardateFrom: Float

    """
    Ending stardate of movie story
    """
    stardateTo: Float

    """
    Story authors authors involved in the movie
    """
    storyAuthors: [StaffBase]

    """
    Stunt performers appearing in the movie
    """
    stuntPerformers: [PerformerBase]

    """
    Movie title
    """
    title: String!

    """
    Movie title in Bulgarian
    """
    titleBulgarian: String

    """
    Movie title in Catalan
    """
    titleCatalan: String

    """
    Movie title in Chinese traditional
    """
    titleChineseTraditional: String

    """
    Movie title in German
    """
    titleGerman: String

    """
    Movie title in Italian
    """
    titleItalian: String

    """
    Movie title in Japanese
    """
    titleJapanese: String

    """
    Movie title in Polish
    """
    titlePolish: String

    """
    Movie title in Russian
    """
    titleRussian: String

    """
    Movie title in Serbian
    """
    titleSerbian: String

    """
    Movie title in Spanish
    """
    titleSpanish: String

    """
    Movie unique ID
    """
    uid: String!

    """
    Date the movie was first released in the United States
    """
    usReleaseDate: String

    """
    Writers involved in the movie
    """
    writers: [StaffBase]

    """
    Starting year of movie story
    """
    yearFrom: Int

    """
    Ending year of movie story
    """
    yearTo: Int
  }

  """
  Response object for occupations search
  """
  type OccupationBaseResponse {
    """
    List of occupations matching given criteria
    """
    occupations: [OccupationBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Response object for single occupation query
  """
  type OccupationFullResponse {
    """
    Full occupation, returned when queried using UID
    """
    occupation: OccupationFull
  }

  """
  Full occupation, returned when queried using UID
  """
  type OccupationFull {
    """
    Characters with this occupation
    """
    characters: [CharacterBase]

    """
    Whether it's a legal occupation
    """
    legalOccupation: Boolean

    """
    Whether it's a medical occupation
    """
    medicalOccupation: Boolean

    """
    Occupation name
    """
    name: String!

    """
    Whether it's a scientific occupation
    """
    scientificOccupation: Boolean

    """
    Occupation unique ID
    """
    uid: String!
  }

  """
  Response object for occupations search (V2)
  """
  type OccupationV2BaseResponse {
    """
    List of occupations matching given criteria
    """
    occupations: [OccupationV2Base]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Base occupations, returned in search results (V2)
  """
  type OccupationV2Base {
    """
    Whether it's an arts occupation
    """
    artsOccupation: Boolean

    """
    Whether it's a communication occupation
    """
    communicationOccupation: Boolean

    """
    Whether it's an economic occupation
    """
    economicOccupation: Boolean

    """
    Whether it's an education occupation
    """
    educationOccupation: Boolean

    """
    Whether it's an entertainment occupation
    """
    entertainmentOccupation: Boolean

    """
    Whether it's an illegal occupation
    """
    illegalOccupation: Boolean

    """
    Whether it's a legal occupation
    """
    legalOccupation: Boolean

    """
    Whether it's a medical occupation
    """
    medicalOccupation: Boolean

    """
    Occupation name
    """
    name: String!

    """
    Whether it's a scientific occupation
    """
    scientificOccupation: Boolean

    """
    Whether it's a sports occupation
    """
    sportsOccupation: Boolean

    """
    Occupation unique ID
    """
    uid: String!

    """
    Whether it's a victual occupation
    """
    victualOccupation: Boolean
  }

  """
  Response object for single occupation query (V2)
  """
  type OccupationV2FullResponse {
    """
    Full occupation, returned when queried using UID (V2)
    """
    occupation: OccupationV2Full
  }

  """
  Full occupation, returned when queried using UID (V2)
  """
  type OccupationV2Full {
    """
    Whether it's an arts occupation
    """
    artsOccupation: Boolean

    """
    Characters with this occupation
    """
    characters: [CharacterBase]

    """
    Whether it's a communication occupation
    """
    communicationOccupation: Boolean

    """
    Whether it's an economic occupation
    """
    economicOccupation: Boolean

    """
    Whether it's an education occupation
    """
    educationOccupation: Boolean

    """
    Whether it's an entertainment occupation
    """
    entertainmentOccupation: Boolean

    """
    Whether it's an illegal occupation
    """
    illegalOccupation: Boolean

    """
    Whether it's a legal occupation
    """
    legalOccupation: Boolean

    """
    Whether it's a medical occupation
    """
    medicalOccupation: Boolean

    """
    Occupation name
    """
    name: String!

    """
    Whether it's a scientific occupation
    """
    scientificOccupation: Boolean

    """
    Whether it's a sports occupation
    """
    sportsOccupation: Boolean

    """
    Occupation unique ID
    """
    uid: String!

    """
    Whether it's a victual occupation
    """
    victualOccupation: Boolean
  }

  """
  Response object for organizations search
  """
  type OrganizationBaseResponse {
    """
    List of organizations matching given criteria
    """
    organizations: [OrganizationBase]

    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Response object for single organization query
  """
  type OrganizationFullResponse {
    """
    Full organization, returned when queried using UID
    """
    organization: OrganizationFull
  }

  """
  Full organization, returned when queried using UID
  """
  type OrganizationFull {
    """
    Whether this organization is from alternate reality
    """
    alternateReality: Boolean

    """
    Characters belonging to this organization
    """
    characters: [CharacterBase]

    """
    Whether it's a government
    """
    government: Boolean

    """
    Whether it's a government agency
    """
    governmentAgency: Boolean

    """
    Whether it's an intergovernmental organization
    """
    intergovernmentalOrganization: Boolean

    """
    Whether it's a law enforcement agency
    """
    lawEnforcementAgency: Boolean

    """
    Whether it's a medical organization
    """
    medicalOrganization: Boolean

    """
    Whether it's a military organization
    """
    militaryOrganization: Boolean

    """
    Whether it's a military unit
    """
    militaryUnit: Boolean

    """
    Whether this organization is from mirror universe
    """
    mirror: Boolean

    """
    Organization name
    """
    name: String!

    """
    Whether it's a prison or penal colony
    """
    prisonOrPenalColony: Boolean

    """
    Whether it's a research organization
    """
    researchOrganization: Boolean

    """
    Whether it's a sport organization
    """
    sportOrganization: Boolean

    """
    Organization unique ID
    """
    uid: String!
  }

  """
  Response object for performers search
  """
  type PerformerBaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    List of performers matching given criteria
    """
    performers: [PerformerBase]

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Response object for single performer query
  """
  type PerformerFullResponse {
    """
    Full performer, returned when queried using UID
    """
    performer: PerformerFull
  }

  """
  Full performer, returned when queried using UID
  """
  type PerformerFull {
    """
    Whether it's an animal performer
    """
    animalPerformer: Boolean

    """
    Performer birth name
    """
    birthName: String

    """
    Characters played by this performer
    """
    characters: [CharacterBase]

    """
    Date the performer was born
    """
    dateOfBirth: String

    """
    Date the performer died
    """
    dateOfDeath: String

    """
    Whether it's a performer that appeared in Star Trek: Discovery
    """
    disPerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: Deep Space Nine
    """
    ds9Performer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: Enterprise
    """
    entPerformer: Boolean

    """
    Episodes in which this person appeared as a performer
    """
    episodesPerformances: [EpisodeBase]

    """
    Episodes in which this person appeared as a stand-in performer
    """
    episodesStandInPerformances: [EpisodeBase]

    """
    Episodes in which this person appeared as a stunt performer
    """
    episodesStuntPerformances: [EpisodeBase]

    """
    Whether it's a performer that appeared in a Star Trek movie
    """
    filmPerformer: Boolean

    """
    Gender
    """
    gender: Gender

    """
    Movies in which this person appeared as a performer
    """
    moviesPerformances: [MovieBase]

    """
    Movies in which this person appeared as a stand-in performer
    """
    moviesStandInPerformances: [MovieBase]

    """
    Movies in which this person appeared as a stunt performer
    """
    moviesStuntPerformances: [MovieBase]

    """
    Performer name
    """
    name: String!

    """
    Place the performer was born
    """
    placeOfBirth: String

    """
    Place the performer died
    """
    placeOfDeath: String

    """
    Whether it's a stand-in performer
    """
    standInPerformer: Boolean

    """
    Whether it's a stunt performer
    """
    stuntPerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: The Animated Series
    """
    tasPerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: The Next Generation
    """
    tngPerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: The Original Series
    """
    tosPerformer: Boolean

    """
    Performer unique ID
    """
    uid: String!

    """
    Whether it's a video game performer
    """
    videoGamePerformer: Boolean

    """
    Whether it's a voice performer
    """
    voicePerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: Voyager
    """
    voyPerformer: Boolean
  }

  """
  Response object for performers search (V2)
  """
  type PerformerV2BaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    List of performers matching given criteria
    """
    performers: [PerformerV2Base]

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Base performer, returned in search results (V2)
  """
  type PerformerV2Base {
    """
    Whether it's an animal performer
    """
    animalPerformer: Boolean

    """
    Whether it's an audiobook performer
    """
    audiobookPerformer: Boolean

    """
    Performer birth name
    """
    birthName: String

    """
    Whether it's a cut performer
    """
    cutPerformer: Boolean

    """
    Date the performer was born
    """
    dateOfBirth: String

    """
    Date the performer died
    """
    dateOfDeath: String

    """
    Whether it's a performer that appeared in Star Trek: Discovery
    """
    disPerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: Deep Space Nine
    """
    ds9Performer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: Enterprise
    """
    entPerformer: Boolean

    """
    Whether it's a performer that appeared in a Star Trek movie
    """
    filmPerformer: Boolean

    """
    Gender
    """
    gender: Gender

    """
    Whether it's a performer that appeared in Star Trek: Lower Decks
    """
    ldPerformer: Boolean

    """
    Performer name
    """
    name: String!

    """
    Whether it's a performer that appeared in Star Trek: Picard
    """
    picPerformer: Boolean

    """
    Place the performer was born
    """
    placeOfBirth: String

    """
    Place the performer died
    """
    placeOfDeath: String

    """
    Whether it's a performer that appeared in Star Trek: Prodigy
    """
    proPerformer: Boolean

    """
    Whether it's a puppeteer
    """
    puppeteer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: Strange New Worlds
    """
    snwPerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: Short Treks
    """
    stPerformer: Boolean

    """
    Whether it's a stand-in performer
    """
    standInPerformer: Boolean

    """
    Whether it's a stunt performer
    """
    stuntPerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: The Animated Series
    """
    tasPerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: The Next Generation
    """
    tngPerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: The Original Series
    """
    tosPerformer: Boolean

    """
    Performer unique ID
    """
    uid: String!

    """
    Whether it's a video game performer
    """
    videoGamePerformer: Boolean

    """
    Whether it's a voice performer
    """
    voicePerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: Voyager
    """
    voyPerformer: Boolean
  }

  """
  Response object for single performer query (V2)
  """
  type PerformerV2FullResponse {
    """
    Full performer, returned when queried using UID (V2)
    """
    performer: PerformerV2Full
  }

  """
  Full performer, returned when queried using UID (V2)
  """
  type PerformerV2Full {
    """
    Whether it's an animal performer
    """
    animalPerformer: Boolean

    """
    Whether it's an audiobook performer
    """
    audiobookPerformer: Boolean

    """
    Performer birth name
    """
    birthName: String

    """
    Characters played by this performer
    """
    characters: [CharacterBase]

    """
    Whether it's a cut performer
    """
    cutPerformer: Boolean

    """
    Date the performer was born
    """
    dateOfBirth: String

    """
    Date the performer died
    """
    dateOfDeath: String

    """
    Whether it's a performer that appeared in Star Trek: Discovery
    """
    disPerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: Deep Space Nine
    """
    ds9Performer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: Enterprise
    """
    entPerformer: Boolean

    """
    Episodes in which this person appeared as a performer
    """
    episodesPerformances: [EpisodeBase]

    """
    Episodes in which this person appeared as a stand-in performer
    """
    episodesStandInPerformances: [EpisodeBase]

    """
    Episodes in which this person appeared as a stunt performer
    """
    episodesStuntPerformances: [EpisodeBase]

    """
    Whether it's a performer that appeared in a Star Trek movie
    """
    filmPerformer: Boolean

    """
    Gender
    """
    gender: Gender

    """
    Whether it's a performer that appeared in Star Trek: Lower Decks
    """
    ldPerformer: Boolean

    """
    Movies in which this person appeared as a performer
    """
    moviesPerformances: [MovieBase]

    """
    Movies in which this person appeared as a stand-in performer
    """
    moviesStandInPerformances: [MovieBase]

    """
    Movies in which this person appeared as a stunt performer
    """
    moviesStuntPerformances: [MovieBase]

    """
    Performer name
    """
    name: String!

    """
    Whether it's a performer that appeared in Star Trek: Picard
    """
    picPerformer: Boolean

    """
    Place the performer was born
    """
    placeOfBirth: String

    """
    Place the performer died
    """
    placeOfDeath: String

    """
    Whether it's a performer that appeared in Star Trek: Prodigy
    """
    proPerformer: Boolean

    """
    Whether it's a stand-in puppeteer
    """
    puppeteer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: Strange New Worlds
    """
    snwPerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: Short Treks
    """
    stPerformer: Boolean

    """
    Whether it's a stand-in performer
    """
    standInPerformer: Boolean

    """
    Whether it's a stunt performer
    """
    stuntPerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: The Animated Series
    """
    tasPerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: The Next Generation
    """
    tngPerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: The Original Series
    """
    tosPerformer: Boolean

    """
    Performer unique ID
    """
    uid: String!

    """
    Whether it's a video game performer
    """
    videoGamePerformer: Boolean

    """
    Whether it's a voice performer
    """
    voicePerformer: Boolean

    """
    Whether it's a performer that appeared in Star Trek: Voyager
    """
    voyPerformer: Boolean
  }

  """
  Response object for seasons search
  """
  type SeasonBaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    List of seasons matching given criteria
    """
    seasons: [SeasonBase]

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Response object for single season query
  """
  type SeasonFullResponse {
    """
    Full location, returned when queried using UID
    """
    season: SeasonFull
  }

  """
  Full location, returned when queried using UID
  """
  type SeasonFull {
    """
    Episodes in this season
    """
    episodes: [EpisodeBase]

    """
    Number of episodes in this season
    """
    numberOfEpisodes: Int

    """
    Season number in series
    """
    seasonNumber: Int

    """
    Base series, returned in search results
    """
    series: SeriesBase

    """
    Season title
    """
    title: String!

    """
    Season unique ID
    """
    uid: String!
  }

  """
  Response object for series search
  """
  type SeriesBaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    List of series matching given criteria
    """
    series: [SeriesBase]

    """
    Response sort
    """
    sort: ResponseSort
  }

  """
  Response object for single series query
  """
  type SeriesFullResponse {
    """
    Full series, returned when queried using UID
    """
    series: SeriesFull
  }

  """
  Full series, returned when queried using UID
  """
  type SeriesFull {
    """
    Series abbreviation
    """
    abbreviation: String

    """
    Episodes in the series
    """
    episodes: [EpisodeBase]

    """
    Number of episodes
    """
    episodesCount: Int

    """
    Number of feature length episodes
    """
    featureLengthEpisodesCount: Int

    """
    Base company, returned in search results
    """
    originalBroadcaster: CompanyBase

    """
    Date the series originally ran to
    """
    originalRunEndDate: String

    """
    Date the series originally ran from
    """
    originalRunStartDate: String

    """
    Base company, returned in search results
    """
    productionCompany: CompanyBase

    """
    Year the series production ended
    """
    productionEndYear: Int

    """
    Year the series production started
    """
    productionStartYear: Int

    """
    Seasons in the series
    """
    seasons: [SeasonBase]

    """
    Number of seasons
    """
    seasonsCount: Int

    """
    Series title
    """
    title: String!

    """
    Series unique ID
    """
    uid: String!
  }

  """
  Response object for soundtracks search
  """
  type SoundtrackBaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of soundtracks matching given criteria
    """
    soundtracks: [SoundtrackBase]
  }

  """
  Base soundtrack, returned in search results
  """
  type SoundtrackBase {
    """
    Length, in seconds
    """
    length: Int

    """
    Release date
    """
    releaseDate: String

    """
    Soundtrack title
    """
    title: String!

    """
    Soundtrack unique ID
    """
    uid: String!
  }

  """
  Response object for single soundtrack query
  """
  type SoundtrackFullResponse {
    """
    Full soundtrack, returned when queried using UID
    """
    soundtrack: SoundtrackFull
  }

  """
  Full soundtrack, returned when queried using UID
  """
  type SoundtrackFull {
    """
    Composers
    """
    composers: [StaffBase]

    """
    Other musicians that contributed to this soundtrack
    """
    contributors: [StaffBase]

    """
    Labels this soundtrack was released by
    """
    labels: [CompanyBase]

    """
    Length, in seconds
    """
    length: Int

    """
    Orchestrators
    """
    orchestrators: [StaffBase]

    """
    References
    """
    references: [Reference]

    """
    Release date
    """
    releaseDate: String

    """
    Soundtrack title
    """
    title: String!

    """
    Soundtrack unique ID
    """
    uid: String!
  }

  """
  Response object for spacecrafts search
  """
  type SpacecraftBaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of spacecrafts matching given criteria
    """
    spacecrafts: [SpacecraftBase]
  }

  """
  Base spacecraft, returned in search results
  """
  type SpacecraftBase {
    """
    Date the spacecraft status was last known
    """
    dateStatus: String

    """
    Spacecraft name
    """
    name: String!

    """
    Header organization, embedded in other objects
    """
    operator: OrganizationHeader

    """
    Header organization, embedded in other objects
    """
    owner: OrganizationHeader

    """
    Spacecraft registry
    """
    registry: String

    """
    Header spacecraft class, embedded in other objects
    """
    spacecraftClass: SpacecraftClassHeader

    """
    Status of a spacecraft (in prime reality, if spacecraft was in more than one realities)
    """
    status: String

    """
    Spacecraft unique ID
    """
    uid: String!
  }

  """
  Header organization, embedded in other objects
  """
  type OrganizationHeader {
    """
    Organization name
    """
    name: String!

    """
    Organization unique ID
    """
    uid: String!
  }

  """
  Header spacecraft class, embedded in other objects
  """
  type SpacecraftClassHeader {
    """
    Spacecraft class name
    """
    name: String!

    """
    Spacecraft class unique ID
    """
    uid: String!
  }

  """
  Response object for spacecraft classes search
  """
  type SpacecraftClassBaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of spacecraft classes matching given criteria
    """
    spacecraftClasses: [SpacecraftClassBase]
  }

  """
  Base spacecraft class, returned in search results
  """
  type SpacecraftClassBase {
    """
    Starting period when this spacecraft class was in use
    """
    activeFrom: String

    """
    Ending period when this spacecraft class was in use
    """
    activeTo: String

    """
    Header organization, embedded in other objects
    """
    affiliation: OrganizationHeader

    """
    Whether this spacecraft class is from alternate reality
    """
    alternateReality: Boolean

    """
    Spacecraft class name
    """
    name: String!

    """
    Number of decks
    """
    numberOfDecks: Int

    """
    Header organization, embedded in other objects
    """
    operator: OrganizationHeader

    """
    Header organization, embedded in other objects
    """
    owner: OrganizationHeader

    """
    Header species, embedded in other objects
    """
    species: SpeciesHeader

    """
    Spacecraft class unique ID
    """
    uid: String!

    """
    Whether it's a warp-capable spacecraft class
    """
    warpCapable: Boolean
  }

  """
  Header species, embedded in other objects
  """
  type SpeciesHeader {
    """
    Species name
    """
    name: String!

    """
    Species unique ID
    """
    uid: String!
  }

  """
  Response object for single spacecraft class query
  """
  type SpacecraftClassFullResponse {
    """
    Full spacecraft class, returned when queried using UID
    """
    spacecraftClass: SpacecraftClassFull
  }

  """
  Full spacecraft class, returned when queried using UID
  """
  type SpacecraftClassFull {
    """
    Starting period when this spacecraft class was in use
    """
    activeFrom: String

    """
    Ending period when this spacecraft class was in use
    """
    activeTo: String

    """
    Base organization, returned in search results
    """
    affiliation: OrganizationBase

    """
    Whether this spacecraft class is from alternate reality
    """
    alternateReality: Boolean

    """
    Spacecraft class name
    """
    name: String!

    """
    Number of decks
    """
    numberOfDecks: Int

    """
    Base organization, returned in search results
    """
    operator: OrganizationBase

    """
    Base organization, returned in search results
    """
    owner: OrganizationBase

    """
    Spacecraft types
    """
    spacecraftTypes: [SpacecraftType]

    """
    Spacecrafts
    """
    spacecrafts: [SpacecraftBase]

    """
    Header species, embedded in other objects
    """
    species: SpeciesHeader

    """
    Spacecraft class unique ID
    """
    uid: String!

    """
    Whether it's a warp-capable spacecraft class
    """
    warpCapable: Boolean
  }

  """
  Spacecraft type
  """
  type SpacecraftType {
    """
    Spacecraft type name
    """
    name: String

    """
    Spacecraft type unique ID
    """
    uid: String
  }

  """
  Response object for spacecraft classes search (V2)
  """
  type SpacecraftClassV2BaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of spacecraft classes matching given criteria
    """
    spacecraftClasses: [SpacecraftClassV2Base]
  }

  """
  Base spacecraft class, returned in search results (V2)
  """
  type SpacecraftClassV2Base {
    """
    Starting period when this spacecraft class was in use
    """
    activeFrom: String

    """
    Ending period when this spacecraft class was in use
    """
    activeTo: String

    """
    Whether this spacecraft class is from alternate reality
    """
    alternateReality: Boolean

    """
    Crew
    """
    crew: String

    """
    Whether this spacecraft class is from mirror universe
    """
    mirror: Boolean

    """
    Spacecraft class name
    """
    name: String!

    """
    Number of decks
    """
    numberOfDecks: Int

    """
    Header species, embedded in other objects
    """
    species: SpeciesHeader

    """
    Spacecraft class unique ID
    """
    uid: String!

    """
    Whether it's a warp-capable spacecraft class
    """
    warpCapable: Boolean
  }

  """
  Response object for single spacecraft class query (V2)
  """
  type SpacecraftClassV2FullResponse {
    """
    Full spacecraft class, returned when queried using UID (V2)
    """
    spacecraftClass: SpacecraftClassV2Full
  }

  """
  Full spacecraft class, returned when queried using UID (V2)
  """
  type SpacecraftClassV2Full {
    """
    Starting period when this spacecraft class was in use
    """
    activeFrom: String

    """
    Ending period when this spacecraft class was in use
    """
    activeTo: String

    """
    Affiliations
    """
    affiliations: [OrganizationBase]

    """
    Whether this spacecraft class is from alternate reality
    """
    alternateReality: Boolean

    """
    Armaments
    """
    armaments: [WeaponV2Base]

    """
    Crew
    """
    crew: String

    """
    Whether this spacecraft class is from mirror universe
    """
    mirror: Boolean

    """
    Spacecraft class name
    """
    name: String!

    """
    Number of decks
    """
    numberOfDecks: Int

    """
    Operators
    """
    operators: [OrganizationBase]

    """
    Owners
    """
    owners: [OrganizationBase]

    """
    Spacecraft types
    """
    spacecraftTypes: [SpacecraftType]

    """
    Spacecrafts
    """
    spacecrafts: [SpacecraftV2Base]

    """
    Base species, returned in search results
    """
    species: SpeciesBase

    """
    Spacecraft class unique ID
    """
    uid: String!

    """
    Whether it's a warp-capable spacecraft class
    """
    warpCapable: Boolean
  }

  """
  Base weapon, returned in search results (V2)
  """
  type WeaponV2Base {
    """
    Whether this weapon is from alternate reality
    """
    alternateReality: Boolean

    """
    Whether it's a directed energy weapon
    """
    directedEnergyWeapon: Boolean

    """
    Whether it's an explosive weapon
    """
    explosiveWeapon: Boolean

    """
    Whether it's a fictional weapon
    """
    fictionalWeapon: Boolean

    """
    Whether it's hand-help weapon
    """
    handHeldWeapon: Boolean

    """
    Whether it's a laser technology
    """
    laserTechnology: Boolean

    """
    Whether this weapon is from mirror universe
    """
    mirror: Boolean

    """
    Weapon name
    """
    name: String!

    """
    Whether it's a phaser technology
    """
    phaserTechnology: Boolean

    """
    Whether it's a photonic technology
    """
    photonicTechnology: Boolean

    """
    Whether it's a plasma technology
    """
    plasmaTechnology: Boolean

    """
    Whether it's a projectile weapon
    """
    projectileWeapon: Boolean

    """
    Weapon unique ID
    """
    uid: String!
  }

  """
  Base spacecraft, returned in search results (V2)
  """
  type SpacecraftV2Base {
    """
    Header organization, embedded in other objects
    """
    affiliation: OrganizationHeader

    """
    Date the spacecraft status was last known
    """
    dateStatus: String

    """
    Spacecraft name
    """
    name: String!

    """
    Header organization, embedded in other objects
    """
    operator: OrganizationHeader

    """
    Header organization, embedded in other objects
    """
    owner: OrganizationHeader

    """
    Spacecraft registry
    """
    registry: String

    """
    Header spacecraft class, embedded in other objects
    """
    spacecraftClass: SpacecraftClassHeader

    """
    Status of a spacecraft (in prime reality, if spacecraft was in more than one realities)
    """
    status: String

    """
    Spacecraft unique ID
    """
    uid: String!
  }

  """
  Base species, returned in search results
  """
  type SpeciesBase {
    """
    Whether this species is from alternate reality
    """
    alternateReality: Boolean

    """
    Whether it's an extinct species
    """
    extinctSpecies: Boolean

    """
    Whether it's an extra-galactic species
    """
    extraGalacticSpecies: Boolean

    """
    Header astronomical object, embedded in other objects
    """
    homeworld: AstronomicalObjectHeader

    """
    Whether it's a humanoid species
    """
    humanoidSpecies: Boolean

    """
    Species name
    """
    name: String!

    """
    Whether it's a non-corporeal species
    """
    nonCorporealSpecies: Boolean

    """
    Header astronomical object, embedded in other objects
    """
    quadrant: AstronomicalObjectHeader

    """
    Whether it's a reptilian species
    """
    reptilianSpecies: Boolean

    """
    Whether it's a shapeshifting species
    """
    shapeshiftingSpecies: Boolean

    """
    Whether it's a spaceborne species
    """
    spaceborneSpecies: Boolean

    """
    Whether it's a telepathic species
    """
    telepathicSpecies: Boolean

    """
    Whether it's a trans-dimensional species
    """
    transDimensionalSpecies: Boolean

    """
    Species unique ID
    """
    uid: String!

    """
    Whether it's a unnamed species
    """
    unnamedSpecies: Boolean

    """
    Whether it's a warp-capable species
    """
    warpCapableSpecies: Boolean
  }

  """
  Response object for single spacecraft class query (V3)
  """
  type SpacecraftClassV3FullResponse {
    """
    Full spacecraft class, returned when queried using UID (V3)
    """
    spacecraftClass: SpacecraftClassV3Full
  }

  """
  Full spacecraft class, returned when queried using UID (V3)
  """
  type SpacecraftClassV3Full {
    """
    Starting period when this spacecraft class was in use
    """
    activeFrom: String

    """
    Ending period when this spacecraft class was in use
    """
    activeTo: String

    """
    Affiliations
    """
    affiliations: [OrganizationBase]

    """
    Whether this spacecraft class is from alternate reality
    """
    alternateReality: Boolean

    """
    Armaments
    """
    armaments: [WeaponV2Base]

    """
    Crew
    """
    crew: String

    """
    Defenses
    """
    defenses: [TechnologyV2Base]

    """
    Whether this spacecraft class is from mirror universe
    """
    mirror: Boolean

    """
    Spacecraft class name
    """
    name: String!

    """
    Number of decks
    """
    numberOfDecks: Int

    """
    Operators
    """
    operators: [OrganizationBase]

    """
    Owners
    """
    owners: [OrganizationBase]

    """
    Spacecraft types
    """
    spacecraftTypes: [SpacecraftType]

    """
    Spacecrafts
    """
    spacecrafts: [SpacecraftV2Base]

    """
    Base species, returned in search results
    """
    species: SpeciesBase

    """
    Spacecraft class unique ID
    """
    uid: String!

    """
    Whether it's a warp-capable spacecraft class
    """
    warpCapable: Boolean
  }

  """
  Base technology, returned in search results (V2)
  """
  type TechnologyV2Base {
    """
    Whether it's an artificial lifeform component
    """
    artificialLifeformComponent: Boolean

    """
    Whether it's a Borg component
    """
    borgComponent: Boolean

    """
    Whether it's a Borg technology
    """
    borgTechnology: Boolean

    """
    Whether it's a communications technology
    """
    communicationsTechnology: Boolean

    """
    Whether it's a technology related to computer programming
    """
    computerProgramming: Boolean

    """
    Whether it's a computer technology
    """
    computerTechnology: Boolean

    """
    Whether it's a culinary tool
    """
    culinaryTool: Boolean

    """
    Whether it's a database
    """
    database: Boolean

    """
    Whether it's a energy technology
    """
    energyTechnology: Boolean

    """
    Whether it's a engineering tool
    """
    engineeringTool: Boolean

    """
    Whether it's a fictional technology
    """
    fictionalTechnology: Boolean

    """
    Whether it's a holographic technology
    """
    holographicTechnology: Boolean

    """
    Whether it's a household tool
    """
    householdTool: Boolean

    """
    Whether it's a identification technology
    """
    identificationTechnology: Boolean

    """
    Whether it's a life support technology
    """
    lifeSupportTechnology: Boolean

    """
    Whether it's a medical equipment
    """
    medicalEquipment: Boolean

    """
    Whether it's a military technology
    """
    militaryTechnology: Boolean

    """
    Technology name
    """
    name: String!

    """
    Whether it's a propulsion technology
    """
    propulsionTechnology: Boolean

    """
    Whether it's a security technology
    """
    securityTechnology: Boolean

    """
    Whether it's a sensor technology
    """
    sensorTechnology: Boolean

    """
    Whether it's a shield technology
    """
    shieldTechnology: Boolean

    """
    Whether it's a spacecraft component
    """
    spacecraftComponent: Boolean

    """
    Whether it's a subroutine
    """
    subroutine: Boolean

    """
    Whether it's a time travel technology
    """
    timeTravelTechnology: Boolean

    """
    Whether it's a tool
    """
    tool: Boolean

    """
    Whether it's a transportation technology
    """
    transportationTechnology: Boolean

    """
    Whether it's a transporter technology
    """
    transporterTechnology: Boolean

    """
    Whether it's a transwarp technology
    """
    transwarpTechnology: Boolean

    """
    Technology unique ID
    """
    uid: String!

    """
    Whether it's a victual technology
    """
    victualTechnology: Boolean

    """
    Whether it's a warp technology
    """
    warpTechnology: Boolean

    """
    Whether it's a weapon component
    """
    weaponComponent: Boolean
  }

  """
  Response object for single spacecraft query
  """
  type SpacecraftFullResponse {
    """
    Full spacecraft, returned when queried using UID
    """
    spacecraft: SpacecraftFull
  }

  """
  Full spacecraft, returned when queried using UID
  """
  type SpacecraftFull {
    """
    Date the spacecraft status was last known
    """
    dateStatus: String

    """
    Spacecraft name
    """
    name: String!

    """
    Base organization, returned in search results
    """
    operator: OrganizationBase

    """
    Base organization, returned in search results
    """
    owner: OrganizationBase

    """
    Spacecraft registry
    """
    registry: String

    """
    Base spacecraft class, returned in search results
    """
    spacecraftClass: SpacecraftClassBase

    """
    Spacecraft types
    """
    spacecraftTypes: [SpacecraftType]

    """
    Status of a spacecraft (in prime reality, if spacecraft was in more than one realities)
    """
    status: String

    """
    Spacecraft unique ID
    """
    uid: String!
  }

  """
  Response object for spacecrafts search (V2)
  """
  type SpacecraftV2BaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of spacecrafts matching given criteria
    """
    spacecrafts: [SpacecraftV2Base]
  }

  """
  Response object for single spacecraft query (V2)
  """
  type SpacecraftV2FullResponse {
    """
    Full spacecraft, returned when queried using UID (V2)
    """
    spacecraft: SpacecraftV2Full
  }

  """
  Full spacecraft, returned when queried using UID (V2)
  """
  type SpacecraftV2Full {
    """
    Base organization, returned in search results
    """
    affiliation: OrganizationBase

    """
    Date the spacecraft status was last known
    """
    dateStatus: String

    """
    Spacecraft name
    """
    name: String!

    """
    Base organization, returned in search results
    """
    operator: OrganizationBase

    """
    Base organization, returned in search results
    """
    owner: OrganizationBase

    """
    Spacecraft registry
    """
    registry: String

    """
    Base spacecraft class, returned in search results (V2)
    """
    spacecraftClass: SpacecraftClassV2Base

    """
    Spacecraft types
    """
    spacecraftTypes: [SpacecraftType]

    """
    Status of a spacecraft (in prime reality, if spacecraft was in more than one realities)
    """
    status: String

    """
    Spacecraft unique ID
    """
    uid: String!
  }

  """
  Response object for species search
  """
  type SpeciesBaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of species matching given criteria
    """
    species: [SpeciesBase]
  }

  """
  Response object for single species query
  """
  type SpeciesFullResponse {
    """
    Full species, returned when queried using UID
    """
    species: SpeciesFull
  }

  """
  Full species, returned when queried using UID
  """
  type SpeciesFull {
    """
    Whether this species is from alternate reality
    """
    alternateReality: Boolean

    """
    Characters belonging to the species
    """
    characters: [CharacterBase]

    """
    Whether it's an extinct species
    """
    extinctSpecies: Boolean

    """
    Whether it's an extra-galactic species
    """
    extraGalacticSpecies: Boolean

    """
    Base astronomical object, returned in search results
    """
    homeworld: AstronomicalObjectBase

    """
    Whether it's a humanoid species
    """
    humanoidSpecies: Boolean

    """
    Species name
    """
    name: String!

    """
    Whether it's a non-corporeal species
    """
    nonCorporealSpecies: Boolean

    """
    Base astronomical object, returned in search results
    """
    quadrant: AstronomicalObjectBase

    """
    Whether it's a reptilian species
    """
    reptilianSpecies: Boolean

    """
    Whether it's a shapeshifting species
    """
    shapeshiftingSpecies: Boolean

    """
    Whether it's a spaceborne species
    """
    spaceborneSpecies: Boolean

    """
    Whether it's a telepathic species
    """
    telepathicSpecies: Boolean

    """
    Whether it's a trans-dimensional species
    """
    transDimensionalSpecies: Boolean

    """
    Species unique ID
    """
    uid: String!

    """
    Whether it's a unnamed species
    """
    unnamedSpecies: Boolean

    """
    Whether it's a warp-capable species
    """
    warpCapableSpecies: Boolean
  }

  """
  Response object for species search (V2)
  """
  type SpeciesV2BaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of species matching given criteria
    """
    species: [SpeciesV2Base]
  }

  """
  Base species, returned in search results (V2)
  """
  type SpeciesV2Base {
    """
    Whether this species is from alternate reality
    """
    alternateReality: Boolean

    """
    Whether it's an avian species
    """
    avianSpecies: Boolean

    """
    Whether it's an extinct species
    """
    extinctSpecies: Boolean

    """
    Whether it's an extra-galactic species
    """
    extraGalacticSpecies: Boolean

    """
    Header astronomical object, embedded in other objects
    """
    homeworld: AstronomicalObjectHeader

    """
    Whether it's a humanoid species
    """
    humanoidSpecies: Boolean

    """
    Species name
    """
    name: String!

    """
    Whether it's a non-corporeal species
    """
    nonCorporealSpecies: Boolean

    """
    Header astronomical object, embedded in other objects
    """
    quadrant: AstronomicalObjectHeader

    """
    Whether it's a reptilian species
    """
    reptilianSpecies: Boolean

    """
    Whether it's a shapeshifting species
    """
    shapeshiftingSpecies: Boolean

    """
    Whether it's a spaceborne species
    """
    spaceborneSpecies: Boolean

    """
    Whether it's a telepathic species
    """
    telepathicSpecies: Boolean

    """
    Whether it's a trans-dimensional species
    """
    transDimensionalSpecies: Boolean

    """
    Species unique ID
    """
    uid: String!

    """
    Whether it's a unnamed species
    """
    unnamedSpecies: Boolean

    """
    Whether it's a warp-capable species
    """
    warpCapableSpecies: Boolean
  }

  """
  Response object for single species query (V2)
  """
  type SpeciesV2FullResponse {
    """
    Full species, returned when queried using UID (V2)
    """
    species: SpeciesV2Full
  }

  """
  Full species, returned when queried using UID (V2)
  """
  type SpeciesV2Full {
    """
    Whether this species is from alternate reality
    """
    alternateReality: Boolean

    """
    Whether it's an avian species
    """
    avianSpecies: Boolean

    """
    Characters belonging to the species
    """
    characters: [CharacterBase]

    """
    Whether it's an extinct species
    """
    extinctSpecies: Boolean

    """
    Whether it's an extra-galactic species
    """
    extraGalacticSpecies: Boolean

    """
    Base astronomical object, returned in search results (V2)
    """
    homeworld: AstronomicalObjectV2Base

    """
    Whether it's a humanoid species
    """
    humanoidSpecies: Boolean

    """
    Species name
    """
    name: String!

    """
    Whether it's a non-corporeal species
    """
    nonCorporealSpecies: Boolean

    """
    Base astronomical object, returned in search results (V2)
    """
    quadrant: AstronomicalObjectV2Base

    """
    Whether it's a reptilian species
    """
    reptilianSpecies: Boolean

    """
    Whether it's a shapeshifting species
    """
    shapeshiftingSpecies: Boolean

    """
    Whether it's a spaceborne species
    """
    spaceborneSpecies: Boolean

    """
    Whether it's a telepathic species
    """
    telepathicSpecies: Boolean

    """
    Whether it's a trans-dimensional species
    """
    transDimensionalSpecies: Boolean

    """
    Species unique ID
    """
    uid: String!

    """
    Whether it's a unnamed species
    """
    unnamedSpecies: Boolean

    """
    Whether it's a warp-capable species
    """
    warpCapableSpecies: Boolean
  }

  """
  Response object for staff search
  """
  type StaffBaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of staff matching given criteria
    """
    staff: [StaffBase]
  }

  """
  Response object for single staff query
  """
  type StaffFullResponse {
    """
    Full staff, returned when queried using UID
    """
    staff: StaffFull
  }

  """
  Full staff, returned when queried using UID
  """
  type StaffFull {
    """
    Whether this person is from art department
    """
    artDepartment: Boolean

    """
    Whether this person is an art director
    """
    artDirector: Boolean

    """
    Whether this person is an assistant or second unit director director
    """
    assistantOrSecondUnitDirector: Boolean

    """
    Whether this person is an audio author
    """
    audioAuthor: Boolean

    """
    Whether this person is an author
    """
    author: Boolean

    """
    Staff birth name
    """
    birthName: String

    """
    Whether this person is a calendar artist
    """
    calendarArtist: Boolean

    """
    Whether this person is from camera and electrical department
    """
    cameraAndElectricalDepartment: Boolean

    """
    Whether this person is from casting department
    """
    castingDepartment: Boolean

    """
    Whether this person is a part of CBS digital staff
    """
    cbsDigitalStaff: Boolean

    """
    Whether this person is a cinematographer
    """
    cinematographer: Boolean

    """
    Whether this person is a comic artist
    """
    comicArtist: Boolean

    """
    Whether this person is a comic author
    """
    comicAuthor: Boolean

    """
    Whether this person is a comic color artist
    """
    comicColorArtist: Boolean

    """
    Whether this person is a comic ink artist
    """
    comicInkArtist: Boolean

    """
    Whether this person is a comic interior artist
    """
    comicInteriorArtist: Boolean

    """
    Whether this person is a comic letter artist
    """
    comicLetterArtist: Boolean

    """
    Whether this person is a comic pencil artist
    """
    comicPencilArtist: Boolean

    """
    Whether this person is a comic strip artist
    """
    comicStripArtist: Boolean

    """
    Whether this person is a composer
    """
    composer: Boolean

    """
    Whether this person is from costume department
    """
    costumeDepartment: Boolean

    """
    Whether this person is a custume designer
    """
    costumeDesigner: Boolean

    """
    Date the staff was born
    """
    dateOfBirth: String

    """
    Date the staff died
    """
    dateOfDeath: String

    """
    Episodes directed by this person
    """
    directedEpisodes: [EpisodeBase]

    """
    Movies directed by this person
    """
    directedMovies: [MovieBase]

    """
    Whether this person is a director
    """
    director: Boolean

    """
    Episodes on which this person worked
    """
    episodes: [EpisodeBase]

    """
    Whether this person is an exhibit and attraction staff
    """
    exhibitAndAttractionStaff: Boolean

    """
    Whether this person is a film editor
    """
    filmEditor: Boolean

    """
    Whether this person is a game artist
    """
    gameArtist: Boolean

    """
    Whether this person is a game author
    """
    gameAuthor: Boolean

    """
    Gender
    """
    gender: Gender

    """
    Whether this person is a part of ILM production staff
    """
    ilmProductionStaff: Boolean

    """
    Whether this person is a linguist
    """
    linguist: Boolean

    """
    Whether this person is a location staff
    """
    locationStaff: Boolean

    """
    Whether this person is a make-up staff
    """
    makeupStaff: Boolean

    """
    Movies on which this person worked
    """
    movies: [MovieBase]

    """
    Whether this person is from music department
    """
    musicDepartment: Boolean

    """
    Staff name
    """
    name: String!

    """
    Whether this person is a novel artist
    """
    novelArtist: Boolean

    """
    Whether this person is a novel author
    """
    novelAuthor: Boolean

    """
    Whether this person is a personal assistant
    """
    personalAssistant: Boolean

    """
    Place the staff was born
    """
    placeOfBirth: String

    """
    Place the staff died
    """
    placeOfDeath: String

    """
    Movies produced by this person
    """
    producedMovies: [MovieBase]

    """
    Whether this person is a producer
    """
    producer: Boolean

    """
    Whether this person is a production associate
    """
    productionAssociate: Boolean

    """
    Whether this person is a production designer
    """
    productionDesigner: Boolean

    """
    Whether this person is a production staff
    """
    productionStaff: Boolean

    """
    Whether this person is a publication artist
    """
    publicationArtist: Boolean

    """
    Whether this person is a publication designer
    """
    publicationDesigner: Boolean

    """
    Whether this person is a publication editor
    """
    publicationEditor: Boolean

    """
    Whether this person is a publication staff
    """
    publicationStaff: Boolean

    """
    Whether this person is a publicity artist
    """
    publicityArtist: Boolean

    """
    Whether this person is a reference artist
    """
    referenceArtist: Boolean

    """
    Whether this person is a reference author
    """
    referenceAuthor: Boolean

    """
    Whether this person is a science consultant
    """
    scienceConsultant: Boolean

    """
    Movies to which this person has written screenplay
    """
    screenplayAuthoredMovies: [MovieBase]

    """
    Whether this person is from sound department
    """
    soundDepartment: Boolean

    """
    Whether this person is a special and visual effects staff
    """
    specialAndVisualEffectsStaff: Boolean

    """
    Whether this person is a special features artist
    """
    specialFeaturesStaff: Boolean

    """
    Episodes to which this person has written story
    """
    storyAuthoredEpisodes: [EpisodeBase]

    """
    Movies to which this person has written story
    """
    storyAuthoredMovies: [MovieBase]

    """
    Whether this person is a story editor
    """
    storyEditor: Boolean

    """
    Whether this person is a studio executive
    """
    studioExecutive: Boolean

    """
    Whether this person is from stunt department
    """
    stuntDepartment: Boolean

    """
    Episodes to which this person has written teleplay
    """
    teleplayAuthoredEpisodes: [EpisodeBase]

    """
    Whether this person is from transportation department
    """
    transportationDepartment: Boolean

    """
    Staff unique ID
    """
    uid: String!

    """
    Whether this person is video game production staff
    """
    videoGameProductionStaff: Boolean

    """
    Whether this person is a writer
    """
    writer: Boolean

    """
    Episodes written by this person
    """
    writtenEpisodes: [EpisodeBase]

    """
    Movies written by this person
    """
    writtenMovies: [MovieBase]
  }

  """
  Response object for staff search (V2)
  """
  type StaffV2BaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of staff matching given criteria
    """
    staff: [StaffV2Base]
  }

  """
  Response object for single staff query (V2)
  """
  type StaffV2FullResponse {
    """
    Full staff, returned when queried using UID (V2)
    """
    staff: StaffV2Full
  }

  """
  Full staff, returned when queried using UID (V2)
  """
  type StaffV2Full {
    """
    Whether this person if from art department
    """
    artDepartment: Boolean

    """
    Whether this person is an art director
    """
    artDirector: Boolean

    """
    Whether this person is an assistant or second unit director director
    """
    assistantOrSecondUnitDirector: Boolean

    """
    Whether this person is an audio author
    """
    audioAuthor: Boolean

    """
    Whether this person is an author
    """
    author: Boolean

    """
    Staff birth name
    """
    birthName: String

    """
    Whether this person is a calendar artist
    """
    calendarArtist: Boolean

    """
    Whether this person is from camera and electrical department
    """
    cameraAndElectricalDepartment: Boolean

    """
    Whether this person is from casting department
    """
    castingDepartment: Boolean

    """
    Whether this person is a part of CBS digital staff
    """
    cbsDigitalStaff: Boolean

    """
    Whether this person is a cinematographer
    """
    cinematographer: Boolean

    """
    Whether this person is a comic artist
    """
    comicArtist: Boolean

    """
    Whether this person is a comic author
    """
    comicAuthor: Boolean

    """
    Whether this person is a comic color artist
    """
    comicColorArtist: Boolean

    """
    Whether this person is a comic cover artist
    """
    comicCoverArtist: Boolean

    """
    Whether this person is a comic ink artist
    """
    comicInkArtist: Boolean

    """
    Whether this person is a comic interior artist
    """
    comicInteriorArtist: Boolean

    """
    Whether this person is a comic letter artist
    """
    comicLetterArtist: Boolean

    """
    Whether this person is a comic pencil artist
    """
    comicPencilArtist: Boolean

    """
    Whether this person is a comic strip artist
    """
    comicStripArtist: Boolean

    """
    Whether this person is a composer
    """
    composer: Boolean

    """
    Whether this person is from costume department
    """
    costumeDepartment: Boolean

    """
    Whether this person is a custume designer
    """
    costumeDesigner: Boolean

    """
    Date the staff was born
    """
    dateOfBirth: String

    """
    Date the staff died
    """
    dateOfDeath: String

    """
    Episodes directed by this person
    """
    directedEpisodes: [EpisodeBase]

    """
    Movies directed by this person
    """
    directedMovies: [MovieBase]

    """
    Whether this person is a director
    """
    director: Boolean

    """
    Episodes on which this person worked
    """
    episodes: [EpisodeBase]

    """
    Whether this person is an exhibit and attraction staff
    """
    exhibitAndAttractionStaff: Boolean

    """
    Whether this person is a film editor
    """
    filmEditor: Boolean

    """
    Whether this person is a part of Filmation production staff
    """
    filmationProductionStaff: Boolean

    """
    Whether this person is a game artist
    """
    gameArtist: Boolean

    """
    Whether this person is a game author
    """
    gameAuthor: Boolean

    """
    Gender
    """
    gender: Gender

    """
    Whether this person is a part of ILM production staff
    """
    ilmProductionStaff: Boolean

    """
    Whether this person is a linguist
    """
    linguist: Boolean

    """
    Whether this person is a location staff
    """
    locationStaff: Boolean

    """
    Whether this person is a make-up staff
    """
    makeupStaff: Boolean

    """
    Whether this person is a merchandise staff
    """
    merchandiseStaff: Boolean

    """
    Movies on which this person worked
    """
    movies: [MovieBase]

    """
    Whether this person is from music department
    """
    musicDepartment: Boolean

    """
    Staff name
    """
    name: String!

    """
    Whether this person is a novel artist
    """
    novelArtist: Boolean

    """
    Whether this person is a novel author
    """
    novelAuthor: Boolean

    """
    Whether this person is a personal assistant
    """
    personalAssistant: Boolean

    """
    Place the staff was born
    """
    placeOfBirth: String

    """
    Place the staff died
    """
    placeOfDeath: String

    """
    Movies produced by this person
    """
    producedMovies: [MovieBase]

    """
    Whether this person is a producer
    """
    producer: Boolean

    """
    Whether this person is a production associate
    """
    productionAssociate: Boolean

    """
    Whether this person is a production designer
    """
    productionDesigner: Boolean

    """
    Whether this person is a production staff
    """
    productionStaff: Boolean

    """
    Whether this person is a publication artist
    """
    publicationArtist: Boolean

    """
    Whether this person is a publication designer
    """
    publicationDesigner: Boolean

    """
    Whether this person is a publication editor
    """
    publicationEditor: Boolean

    """
    Whether this person is a publication staff
    """
    publicationStaff: Boolean

    """
    Whether this person is a publication artist
    """
    publicityArtist: Boolean

    """
    Whether this person is a reference artist
    """
    referenceArtist: Boolean

    """
    Whether this person is a reference author
    """
    referenceAuthor: Boolean

    """
    Whether this person is a science consultant
    """
    scienceConsultant: Boolean

    """
    Movies to which this person has written screenplay
    """
    screenplayAuthoredMovies: [MovieBase]

    """
    Whether this person is from sound department
    """
    soundDepartment: Boolean

    """
    Whether this person is a special and visual effects staff
    """
    specialAndVisualEffectsStaff: Boolean

    """
    Whether this person is a special features artist
    """
    specialFeaturesStaff: Boolean

    """
    Episodes to which this person has written story
    """
    storyAuthoredEpisodes: [EpisodeBase]

    """
    Movies to which this person has written story
    """
    storyAuthoredMovies: [MovieBase]

    """
    Whether this person is a story editor
    """
    storyEditor: Boolean

    """
    Whether this person is a studio executive
    """
    studioExecutive: Boolean

    """
    Whether this person is from stunt department
    """
    stuntDepartment: Boolean

    """
    Episodes to which this person has written teleplay
    """
    teleplayAuthoredEpisodes: [EpisodeBase]

    """
    Whether this person is from transportation department
    """
    transportationDepartment: Boolean

    """
    Staff unique ID
    """
    uid: String!

    """
    Whether this person is video game production staff
    """
    videoGameProductionStaff: Boolean

    """
    Whether this person is a writer
    """
    writer: Boolean

    """
    Episodes written by this person
    """
    writtenEpisodes: [EpisodeBase]

    """
    Movies written by this person
    """
    writtenMovies: [MovieBase]
  }

  """
  Response object for technology search
  """
  type TechnologyBaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of technology matching given criteria
    """
    technology: [TechnologyBase]
  }

  """
  Base technology, returned in search results
  """
  type TechnologyBase {
    """
    Whether it's a Borg component
    """
    borgComponent: Boolean

    """
    Whether it's a Borg technology
    """
    borgTechnology: Boolean

    """
    Whether it's a communications technology
    """
    communicationsTechnology: Boolean

    """
    Whether it's a technology related to computer programming
    """
    computerProgramming: Boolean

    """
    Whether it's a computer technology
    """
    computerTechnology: Boolean

    """
    Whether it's a culinary tool
    """
    culinaryTool: Boolean

    """
    Whether it's a database
    """
    database: Boolean

    """
    Whether it's a energy technology
    """
    energyTechnology: Boolean

    """
    Whether it's a engineering tool
    """
    engineeringTool: Boolean

    """
    Whether it's a fictional technology
    """
    fictionalTechnology: Boolean

    """
    Whether it's a holographic technology
    """
    holographicTechnology: Boolean

    """
    Whether it's a household tool
    """
    householdTool: Boolean

    """
    Whether it's a identification technology
    """
    identificationTechnology: Boolean

    """
    Whether it's a life support technology
    """
    lifeSupportTechnology: Boolean

    """
    Whether it's a medical equipment
    """
    medicalEquipment: Boolean

    """
    Technology name
    """
    name: String!

    """
    Whether it's a sensor technology
    """
    sensorTechnology: Boolean

    """
    Whether it's a shield technology
    """
    shieldTechnology: Boolean

    """
    Whether it's a subroutine
    """
    subroutine: Boolean

    """
    Whether it's a tool
    """
    tool: Boolean

    """
    Whether it's a transporter technology
    """
    transporterTechnology: Boolean

    """
    Technology unique ID
    """
    uid: String!
  }

  """
  Response object for single technology query
  """
  type TechnologyFullResponse {
    """
    Full technology, returned when queried using UID
    """
    technology: TechnologyFull
  }

  """
  Full technology, returned when queried using UID
  """
  type TechnologyFull {
    """
    Whether it's a Borg component
    """
    borgComponent: Boolean

    """
    Whether it's a Borg technology
    """
    borgTechnology: Boolean

    """
    Whether it's a communications technology
    """
    communicationsTechnology: Boolean

    """
    Whether it's a technology related to computer programming
    """
    computerProgramming: Boolean

    """
    Whether it's a computer technology
    """
    computerTechnology: Boolean

    """
    Whether it's a culinary tool
    """
    culinaryTool: Boolean

    """
    Whether it's a database
    """
    database: Boolean

    """
    Whether it's a energy technology
    """
    energyTechnology: Boolean

    """
    Whether it's a engineering tool
    """
    engineeringTool: Boolean

    """
    Whether it's a fictional technology
    """
    fictionalTechnology: Boolean

    """
    Whether it's a holographic technology
    """
    holographicTechnology: Boolean

    """
    Whether it's a household tool
    """
    householdTool: Boolean

    """
    Whether it's a identification technology
    """
    identificationTechnology: Boolean

    """
    Whether it's a life support technology
    """
    lifeSupportTechnology: Boolean

    """
    Whether it's a medical equipment
    """
    medicalEquipment: Boolean

    """
    Technology name
    """
    name: String!

    """
    Whether it's a sensor technology
    """
    sensorTechnology: Boolean

    """
    Whether it's a shield technology
    """
    shieldTechnology: Boolean

    """
    Whether it's a subroutine
    """
    subroutine: Boolean

    """
    Whether it's a tool
    """
    tool: Boolean

    """
    Whether it's a transporter technology
    """
    transporterTechnology: Boolean

    """
    Technology unique ID
    """
    uid: String!
  }

  """
  Response object for technology search (V2)
  """
  type TechnologyV2BaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of technology matching given criteria
    """
    technology: [TechnologyV2Base]
  }

  """
  Response object for single technology query (V2)
  """
  type TechnologyV2FullResponse {
    """
    Full technology, returned when queried using UID (V2)
    """
    technology: TechnologyV2Full
  }

  """
  Full technology, returned when queried using UID (V2)
  """
  type TechnologyV2Full {
    """
    Whether it's an artificial lifeform component
    """
    artificialLifeformComponent: Boolean

    """
    Whether it's a Borg component
    """
    borgComponent: Boolean

    """
    Whether it's a Borg technology
    """
    borgTechnology: Boolean

    """
    Whether it's a communications technology
    """
    communicationsTechnology: Boolean

    """
    Whether it's a technology related to computer programming
    """
    computerProgramming: Boolean

    """
    Whether it's a computer technology
    """
    computerTechnology: Boolean

    """
    Whether it's a culinary tool
    """
    culinaryTool: Boolean

    """
    Whether it's a database
    """
    database: Boolean

    """
    Whether it's a energy technology
    """
    energyTechnology: Boolean

    """
    Whether it's a engineering tool
    """
    engineeringTool: Boolean

    """
    Whether it's a fictional technology
    """
    fictionalTechnology: Boolean

    """
    Whether it's a holographic technology
    """
    holographicTechnology: Boolean

    """
    Whether it's a household tool
    """
    householdTool: Boolean

    """
    Whether it's a identification technology
    """
    identificationTechnology: Boolean

    """
    Whether it's a life support technology
    """
    lifeSupportTechnology: Boolean

    """
    Whether it's a medical equipment
    """
    medicalEquipment: Boolean

    """
    Whether it's a military technology
    """
    militaryTechnology: Boolean

    """
    Technology name
    """
    name: String!

    """
    Whether it's a propulsion technology
    """
    propulsionTechnology: Boolean

    """
    Whether it's a security technology
    """
    securityTechnology: Boolean

    """
    Whether it's a sensor technology
    """
    sensorTechnology: Boolean

    """
    Whether it's a shield technology
    """
    shieldTechnology: Boolean

    """
    Whether it's a spacecraft component
    """
    spacecraftComponent: Boolean

    """
    Whether it's a subroutine
    """
    subroutine: Boolean

    """
    Whether it's a time travel technology
    """
    timeTravelTechnology: Boolean

    """
    Whether it's a tool
    """
    tool: Boolean

    """
    Whether it's a transportation technology
    """
    transportationTechnology: Boolean

    """
    Whether it's a transporter technology
    """
    transporterTechnology: Boolean

    """
    Whether it's a transwarp technology
    """
    transwarpTechnology: Boolean

    """
    Technology unique ID
    """
    uid: String!

    """
    Whether it's a victual technology
    """
    victualTechnology: Boolean

    """
    Whether it's a warp technology
    """
    warpTechnology: Boolean

    """
    Whether it's a weapon component
    """
    weaponComponent: Boolean
  }

  """
  Response object for titles search
  """
  type TitleBaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of titles matching given criteria
    """
    titles: [TitleBase]
  }

  """
  Response object for single title query
  """
  type TitleFullResponse {
    """
    Full title, returned when queried using UID
    """
    title: TitleFull
  }

  """
  Full title, returned when queried using UID
  """
  type TitleFull {
    """
    Characters that holds this title
    """
    characters: [CharacterBase]

    """
    Whether it's a fleet rank
    """
    fleetRank: Boolean

    """
    Whether it's a military rank
    """
    militaryRank: Boolean

    """
    Whether this title is from mirror universe
    """
    mirror: Boolean

    """
    Title name
    """
    name: String!

    """
    Whether it's a position
    """
    position: Boolean

    """
    Whether it's a religious title
    """
    religiousTitle: Boolean

    """
    Title unique ID
    """
    uid: String!
  }

  """
  Response object for titles search (V2)
  """
  type TitleV2BaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of titles matching given criteria
    """
    titles: [TitleV2Base]
  }

  """
  Base title, returned in search results (V2)
  """
  type TitleV2Base {
    """
    Whether it's a education title
    """
    educationTitle: Boolean

    """
    Whether it's a fleet rank
    """
    fleetRank: Boolean

    """
    Whether it's a military rank
    """
    militaryRank: Boolean

    """
    Whether this title is from mirror universe
    """
    mirror: Boolean

    """
    Title name
    """
    name: String!

    """
    Whether it's a religious title
    """
    religiousTitle: Boolean

    """
    Title unique ID
    """
    uid: String!
  }

  """
  Response object for single title query (V2)
  """
  type TitleV2FullResponse {
    """
    Full title, returned when queried using UID (V2)
    """
    title: TitleV2Full
  }

  """
  Full title, returned when queried using UID (V2)
  """
  type TitleV2Full {
    """
    Characters that holds this title
    """
    characters: [CharacterBase]

    """
    Whether it's a education title
    """
    educationTitle: Boolean

    """
    Whether it's a fleet rank
    """
    fleetRank: Boolean

    """
    Whether it's a military rank
    """
    militaryRank: Boolean

    """
    Whether this title is from mirror universe
    """
    mirror: Boolean

    """
    Title name
    """
    name: String!

    """
    Whether it's a religious title
    """
    religiousTitle: Boolean

    """
    Title unique ID
    """
    uid: String!
  }

  """
  Response object for trading cards search
  """
  type TradingCardBaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of trading cards matching given criteria
    """
    tradingCards: [TradingCardBase]
  }

  """
  Base trading card, returned in search results
  """
  type TradingCardBase {
    """
    Trading card name
    """
    name: String!

    """
    Trading card number
    """
    number: String

    """
    Production run, if different from trading card set production run
    """
    productionRun: Int

    """
    Release year, if set was releases over multiple years
    """
    releaseYear: Int

    """
    Header trading card deck, embedded in other objects
    """
    tradingCardDeck: TradingCardDeckHeader

    """
    Header trading card set, embedded in other objects
    """
    tradingCardSet: TradingCardSetHeader

    """
    Trading card unique ID
    """
    uid: String!
  }

  """
  Header trading card deck, embedded in other objects
  """
  type TradingCardDeckHeader {
    """
    Trading card deck name
    """
    name: String!

    """
    Trading card deck unique ID
    """
    uid: String!
  }

  """
  Header trading card set, embedded in other objects
  """
  type TradingCardSetHeader {
    """
    Trading card set name
    """
    name: String!

    """
    Trading card set unique ID
    """
    uid: String!
  }

  """
  Response object for trading card decks search
  """
  type TradingCardDeckBaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of trading card decks matching given criteria
    """
    tradingCardDecks: [TradingCardDeckBase]
  }

  """
  Base trading card deck, returned in search results
  """
  type TradingCardDeckBase {
    """
    Frequency with which this deck occur in it's set
    """
    frequency: String

    """
    Trading card deck name
    """
    name: String!

    """
    Header trading card set, embedded in other objects
    """
    tradingCardSet: TradingCardSetHeader

    """
    Trading card deck unique ID
    """
    uid: String!
  }

  """
  Response object for single trading card deck query
  """
  type TradingCardDeckFullResponse {
    """
    Full trading card deck, returned when queried using UID
    """
    tradingCardDeck: TradingCardDeckFull
  }

  """
  Full trading card deck, returned when queried using UID
  """
  type TradingCardDeckFull {
    """
    Frequency with which this deck occur in it's set
    """
    frequency: String

    """
    Trading card deck name
    """
    name: String!

    """
    Header trading card set, embedded in other objects
    """
    tradingCardSet: TradingCardSetHeader

    """
    Trading cards in this deck
    """
    tradingCards: [TradingCardBase]

    """
    Trading card deck unique ID
    """
    uid: String!
  }

  """
  Response object for single trading card query
  """
  type TradingCardFullResponse {
    """
    Full trading card, returned when queried using UID
    """
    tradingCard: TradingCardFull
  }

  """
  Full trading card, returned when queried using UID
  """
  type TradingCardFull {
    """
    Trading card name
    """
    name: String!

    """
    Trading card number
    """
    number: String

    """
    Production run, if different from trading card set production run
    """
    productionRun: Int

    """
    Release year, if set was releases over multiple years
    """
    releaseYear: Int

    """
    Base trading card deck, returned in search results
    """
    tradingCardDeck: TradingCardDeckBase

    """
    Base trading card set, returned in search results
    """
    tradingCardSet: TradingCardSetBase

    """
    Trading card unique ID
    """
    uid: String!
  }

  """
  Base trading card set, returned in search results
  """
  type TradingCardSetBase {
    """
    Boxes per case
    """
    boxesPerCase: Int

    """
    Card height, in inches
    """
    cardHeight: Float

    """
    Card width, in inches
    """
    cardWidth: Float

    """
    Cards per deck
    """
    cardsPerPack: Int

    """
    Trading card set name
    """
    name: String!

    """
    Packs per box
    """
    packsPerBox: Int

    """
    Production run
    """
    productionRun: Int

    """
    Production run unit
    """
    productionRunUnit: ProductionRunUnit

    """
    Release day
    """
    releaseDay: Int

    """
    Release month
    """
    releaseMonth: Int

    """
    Release year
    """
    releaseYear: Int

    """
    Trading card set unique ID
    """
    uid: String!
  }

  enum ProductionRunUnit {
    BOX
    SET
  }

  """
  Response object for trading card sets search
  """
  type TradingCardSetBaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of trading card sets matching given criteria
    """
    tradingCardSets: [TradingCardSetBase]
  }

  """
  Response object for single trading card set query
  """
  type TradingCardSetFullResponse {
    """
    Full trading card set, returned when queried using UID
    """
    tradingCardSet: TradingCardSetFull
  }

  """
  Full trading card set, returned when queried using UID
  """
  type TradingCardSetFull {
    """
    Boxes per case
    """
    boxesPerCase: Int

    """
    Card height, in inches
    """
    cardHeight: Float

    """
    Card width, in inches
    """
    cardWidth: Float

    """
    Cards per deck
    """
    cardsPerPack: Int

    """
    Countries of origin
    """
    countriesOfOrigin: [Country]

    """
    Manufacturers
    """
    manufacturers: [CompanyBase]

    """
    Trading card set name
    """
    name: String!

    """
    Packs per box
    """
    packsPerBox: Int

    """
    Production run
    """
    productionRun: Int

    """
    Production run unit
    """
    productionRunUnit: ProductionRunUnit

    """
    Release day
    """
    releaseDay: Int

    """
    Release month
    """
    releaseMonth: Int

    """
    Release year
    """
    releaseYear: Int

    """
    Trading card decks in this set
    """
    tradingCardDecks: [TradingCardDeckBase]

    """
    Trading cards in this set
    """
    tradingCards: [TradingCardBase]

    """
    Trading card set unique ID
    """
    uid: String!
  }

  """
  Real-world country
  """
  type Country {
    """
    ISO 3166-1 alpha-2 code
    """
    iso31661Alpha2Code: String

    """
    Country name
    """
    name: String

    """
    Country unique ID
    """
    uid: String
  }

  """
  Response object for video releases search
  """
  type VideoReleaseBaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of video releases matching given criteria
    """
    videoReleases: [VideoReleaseBase]
  }

  """
  Base video release, returned in search results
  """
  type VideoReleaseBase {
    """
    Whether this video has been release on Amazon.com
    """
    amazonDigitalRelease: Boolean

    """
    Whether this video has been release on Dailymotion
    """
    dailymotionDigitalRelease: Boolean

    """
    Video release format
    """
    format: VideoReleaseFormat

    """
    Whether this video has been release on Google Play
    """
    googlePlayDigitalRelease: Boolean

    """
    Whether this video has been release on iTunes
    """
    itunesDigitalRelease: Boolean

    """
    Whether this video has been release on Netflix
    """
    netflixDigitalRelease: Boolean

    """
    Number of data carriers (like DVD, VCD, VHS etc.)
    """
    numberOfDataCarriers: Int

    """
    Number of episodes
    """
    numberOfEpisodes: Int

    """
    Number of feature-length episodes
    """
    numberOfFeatureLengthEpisodes: Int

    """
    Region 1/A release date
    """
    region1AReleaseDate: String

    """
    Region 1 slimline release date
    """
    region1SlimlineReleaseDate: String

    """
    Region 2/B release date
    """
    region2BReleaseDate: String

    """
    Region 2 slimline release date
    """
    region2SlimlineReleaseDate: String

    """
    Region 4 release date
    """
    region4AReleaseDate: String

    """
    Region 4 slimline release date
    """
    region4SlimlineReleaseDate: String

    """
    Region free release date
    """
    regionFreeReleaseDate: String

    """
    Run time, in minutes
    """
    runTime: Int

    """
    Header season, embedded in other objects
    """
    season: SeasonHeader

    """
    Header series, embedded in other objects
    """
    series: SeriesHeader

    """
    Video release title
    """
    title: String!

    """
    Video release unique ID
    """
    uid: String!

    """
    Whether this video has been release on UltraViolet
    """
    ultraVioletDigitalRelease: Boolean

    """
    Whether this video has been release on Vimeo
    """
    vimeoDigitalRelease: Boolean

    """
    Whether this video has been release on VUDU
    """
    vuduDigitalRelease: Boolean

    """
    Whether this video has been release on Xbox SmartGlass
    """
    xboxSmartGlassDigitalRelease: Boolean

    """
    Starting year of video release story
    """
    yearFrom: Int

    """
    Ending year of video release story
    """
    yearTo: Int

    """
    Whether this video has been release on YouTube
    """
    youTubeDigitalRelease: Boolean
  }

  enum VideoReleaseFormat {
    SUPER_8
    BETAMAX
    VHS
    CED
    LD
    VHD
    VCD
    VIDEO_8
    DVD
    UMD
    HD_DVD
    BLU_RAY
    BLU_RAY_4K_UHD
    DIGITAL_FORMAT
  }

  """
  Response object for video games search
  """
  type VideoGameBaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of video games matching given criteria
    """
    videoGames: [VideoGameBase]
  }

  """
  Base video game, returned in search results
  """
  type VideoGameBase {
    """
    Release date
    """
    releaseDate: String

    """
    Starting stardate of video game story
    """
    stardateFrom: Float

    """
    Ending stardate of video game story
    """
    stardateTo: Float

    """
    System requirements
    """
    systemRequirements: String

    """
    Video game title
    """
    title: String!

    """
    Video game unique ID
    """
    uid: String!

    """
    Starting year of video game story
    """
    yearFrom: Int

    """
    Ending year of video game story
    """
    yearTo: Int
  }

  """
  Response object for single video game query
  """
  type VideoGameFullResponse {
    """
    Full video game, returned when queried using UID
    """
    videoGame: VideoGameFull
  }

  """
  Full video game, returned when queried using UID
  """
  type VideoGameFull {
    """
    Developers
    """
    developers: [CompanyBase]

    """
    Genres
    """
    genres: [Genre]

    """
    Platforms
    """
    platforms: [Platform]

    """
    Publishers
    """
    publishers: [CompanyBase]

    """
    Ratings
    """
    ratings: [ContentRating]

    """
    References
    """
    references: [Reference]

    """
    Release date
    """
    releaseDate: String

    """
    Starting stardate of video game story
    """
    stardateFrom: Float

    """
    Ending stardate of video game story
    """
    stardateTo: Float

    """
    System requirements
    """
    systemRequirements: String

    """
    Video game title
    """
    title: String!

    """
    Video game unique ID
    """
    uid: String!

    """
    Starting year of video game story
    """
    yearFrom: Int

    """
    Ending year of video game story
    """
    yearTo: Int
  }

  """
  Genre of video games
  """
  type Genre {
    """
    Genre name
    """
    name: String

    """
    Genre unique ID
    """
    uid: String
  }

  """
  Platform of video games
  """
  type Platform {
    """
    Platform name
    """
    name: String

    """
    Platform unique ID
    """
    uid: String
  }

  """
  Rating of video release, etc.
  """
  type ContentRating {
    """
    Content rating system
    """
    contentRatingSystem: ContentRatingSystem

    """
    Rating within specified content rating system
    """
    rating: String

    """
    Rating unique ID
    """
    uid: String
  }

  enum ContentRatingSystem {
    BBFC
    OFLC
    OFLCNZ
    DJCTQ
    MDA
    MPAA
    CHVRS
    RCQ
    IFCO
    FSK
    NICAM
    MCCYP
    EIRIN
    HK
    CBFC
    NMHH
    VRC
    RSAC
    ESRB
    ELSPA
    PEGI
    USK
    SELL
    ADESE
    GSRR
    ITUNES
  }

  """
  Response object for single video release query
  """
  type VideoReleaseFullResponse {
    """
    Full video release, returned when queried using UID
    """
    videoRelease: VideoReleaseFull
  }

  """
  Full video release, returned when queried using UID
  """
  type VideoReleaseFull {
    """
    Whether this video has been release on Amazon.com
    """
    amazonDigitalRelease: Boolean

    """
    Whether this video has been release on Dailymotion
    """
    dailymotionDigitalRelease: Boolean

    """
    Video release format
    """
    format: VideoReleaseFormat

    """
    Whether this video has been release on Google Play
    """
    googlePlayDigitalRelease: Boolean

    """
    Whether this video has been release on iTunes
    """
    itunesDigitalRelease: Boolean

    """
    Languages of audio track
    """
    languages: [ContentLanguage]

    """
    Languages that are available with dubbing
    """
    languagesDubbed: [ContentLanguage]

    """
    Languages of subtitles
    """
    languagesSubtitles: [ContentLanguage]

    """
    Whether this video has been release on Netflix
    """
    netflixDigitalRelease: Boolean

    """
    Number of data carriers (like DVD, VCD, VHS etc.)
    """
    numberOfDataCarriers: Int

    """
    Number of episodes
    """
    numberOfEpisodes: Int

    """
    Number of feature-length episodes
    """
    numberOfFeatureLengthEpisodes: Int

    """
    Ratings
    """
    ratings: [ContentRating]

    """
    References
    """
    references: [Reference]

    """
    Region 1/A release date
    """
    region1AReleaseDate: String

    """
    Region 1 slimline release date
    """
    region1SlimlineReleaseDate: String

    """
    Region 2/B release date
    """
    region2BReleaseDate: String

    """
    Region 2 slimline release date
    """
    region2SlimlineReleaseDate: String

    """
    Region 4 release date
    """
    region4AReleaseDate: String

    """
    Region 4 slimline release date
    """
    region4SlimlineReleaseDate: String

    """
    Region free release date
    """
    regionFreeReleaseDate: String

    """
    Run time, in minutes
    """
    runTime: Int

    """
    Base season, returned in search results
    """
    season: SeasonBase

    """
    Base series, returned in search results
    """
    series: SeriesBase

    """
    Video release title
    """
    title: String!

    """
    Video release unique ID
    """
    uid: String!

    """
    Whether this video has been release on UltraViolet
    """
    ultraVioletDigitalRelease: Boolean

    """
    Whether this video has been release on Vimeo
    """
    vimeoDigitalRelease: Boolean

    """
    Whether this video has been release on VUDU
    """
    vuduDigitalRelease: Boolean

    """
    Whether this video has been release on Xbox SmartGlass
    """
    xboxSmartGlassDigitalRelease: Boolean

    """
    Starting year of video release story
    """
    yearFrom: Int

    """
    Ending year of video release story
    """
    yearTo: Int

    """
    Whether this video has been release on YouTube
    """
    youTubeDigitalRelease: Boolean
  }

  """
  Content langauge
  """
  type ContentLanguage {
    """
    ISO 639-1 code
    """
    iso6391Code: String

    """
    Language name
    """
    name: String

    """
    Language unique ID
    """
    uid: String
  }

  """
  Response object for single video release query (V2)
  """
  type VideoReleaseV2FullResponse {
    """
    Full video release, returned when queried using UID
    """
    videoRelease: VideoReleaseV2Full
  }

  """
  Full video release, returned when queried using UID
  """
  type VideoReleaseV2Full {
    """
    Whether this video has been release on Amazon.com
    """
    amazonDigitalRelease: Boolean

    """
    Whether this video has been release on Dailymotion
    """
    dailymotionDigitalRelease: Boolean

    """
    Whether this is a documentary
    """
    documentary: Boolean

    """
    Video release format
    """
    format: VideoReleaseFormat

    """
    Whether this video has been release on Google Play
    """
    googlePlayDigitalRelease: Boolean

    """
    Whether this video has been release on iTunes
    """
    itunesDigitalRelease: Boolean

    """
    Languages of audio track
    """
    languages: [ContentLanguage]

    """
    Languages that are available with dubbing
    """
    languagesDubbed: [ContentLanguage]

    """
    Languages of subtitles
    """
    languagesSubtitles: [ContentLanguage]

    """
    Movies with which this video release is associated, so that it contains the full movie
    """
    movies: [MovieBase]

    """
    Whether this video has been release on Netflix
    """
    netflixDigitalRelease: Boolean

    """
    Number of data carriers (like DVD, VCD, VHS etc.)
    """
    numberOfDataCarriers: Int

    """
    Number of episodes
    """
    numberOfEpisodes: Int

    """
    Number of feature-length episodes
    """
    numberOfFeatureLengthEpisodes: Int

    """
    Ratings
    """
    ratings: [ContentRating]

    """
    References
    """
    references: [Reference]

    """
    Region 1/A release date
    """
    region1AReleaseDate: String

    """
    Region 1 slimline release date
    """
    region1SlimlineReleaseDate: String

    """
    Region 2/B release date
    """
    region2BReleaseDate: String

    """
    Region 2 slimline release date
    """
    region2SlimlineReleaseDate: String

    """
    Region 4 release date
    """
    region4AReleaseDate: String

    """
    Region 4 slimline release date
    """
    region4SlimlineReleaseDate: String

    """
    Region free release date
    """
    regionFreeReleaseDate: String

    """
    Run time, in minutes
    """
    runTime: Int

    """
    Seasons with which this video release is associated, so that it contains part of all of it
    """
    seasons: [SeasonBase]

    """
    Series with which this video release is associated, so that it contains part of all of it
    """
    series: [SeriesBase]

    """
    Whether this contains special features
    """
    specialFeatures: Boolean

    """
    Video release title
    """
    title: String!

    """
    Video release unique ID
    """
    uid: String!

    """
    Whether this video has been release on UltraViolet
    """
    ultraVioletDigitalRelease: Boolean

    """
    Whether this video has been release on Vimeo
    """
    vimeoDigitalRelease: Boolean

    """
    Whether this video has been release on VUDU
    """
    vuduDigitalRelease: Boolean

    """
    Whether this video has been release on Xbox SmartGlass
    """
    xboxSmartGlassDigitalRelease: Boolean

    """
    Starting year of video release story
    """
    yearFrom: Int

    """
    Ending year of video release story
    """
    yearTo: Int

    """
    Whether this video has been release on YouTube
    """
    youTubeDigitalRelease: Boolean
  }

  """
  Response object for weapons search
  """
  type WeaponBaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of weapons matching given criteria
    """
    weapons: [WeaponBase]
  }

  """
  Base weapon, returned in search results
  """
  type WeaponBase {
    """
    Whether this weapon is from alternate reality
    """
    alternateReality: Boolean

    """
    Whether it's hand-help weapon
    """
    handHeldWeapon: Boolean

    """
    Whether it's a laser technology
    """
    laserTechnology: Boolean

    """
    Whether this weapon is from mirror universe
    """
    mirror: Boolean

    """
    Weapon name
    """
    name: String!

    """
    Whether it's a phaser technology
    """
    phaserTechnology: Boolean

    """
    Whether it's a photonic technology
    """
    photonicTechnology: Boolean

    """
    Whether it's a plasma technology
    """
    plasmaTechnology: Boolean

    """
    Weapon unique ID
    """
    uid: String!
  }

  """
  Response object for single weapon query
  """
  type WeaponFullResponse {
    """
    Full weapon, returned when queried using UID
    """
    weapon: WeaponFull
  }

  """
  Full weapon, returned when queried using UID
  """
  type WeaponFull {
    """
    Whether this weapon is from alternate reality
    """
    alternateReality: Boolean

    """
    Whether it's a hand-help weapon
    """
    handHeldWeapon: Boolean

    """
    Whether it's a laser technology
    """
    laserTechnology: Boolean

    """
    Whether this weapon is from mirror universe
    """
    mirror: Boolean

    """
    Weapon name
    """
    name: String!

    """
    Whether it's a phaser technology
    """
    phaserTechnology: Boolean

    """
    Whether it's a photonic technology
    """
    photonicTechnology: Boolean

    """
    Whether it's a plasma technology
    """
    plasmaTechnology: Boolean

    """
    Weapon unique ID
    """
    uid: String!
  }

  """
  Response object for weapons search (V2)
  """
  type WeaponV2BaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of weapons matching given criteria
    """
    weapons: [WeaponV2Base]
  }

  """
  Response object for single weapon query (V2)
  """
  type WeaponV2FullResponse {
    """
    Full weapon, returned when queried using UID (V2)
    """
    weapon: WeaponV2Full
  }

  """
  Full weapon, returned when queried using UID (V2)
  """
  type WeaponV2Full {
    """
    Whether this weapon is from alternate reality
    """
    alternateReality: Boolean

    """
    Whether it's a directed energy weapon
    """
    directedEnergyWeapon: Boolean

    """
    Whether it's an explosive weapon
    """
    explosiveWeapon: Boolean

    """
    Whether it's a fictional weapon
    """
    fictionalWeapon: Boolean

    """
    Whether it's a hand-help weapon
    """
    handHeldWeapon: Boolean

    """
    Whether it's a laser technology
    """
    laserTechnology: Boolean

    """
    Whether this weapon is from mirror universe
    """
    mirror: Boolean

    """
    Weapon name
    """
    name: String!

    """
    Whether it's a phaser technology
    """
    phaserTechnology: Boolean

    """
    Whether it's a photonic technology
    """
    photonicTechnology: Boolean

    """
    Whether it's a plasma technology
    """
    plasmaTechnology: Boolean

    """
    Whether it's a projectile weapon
    """
    projectileWeapon: Boolean

    """
    Weapon unique ID
    """
    uid: String!
  }

  type Query {
    """
    Searching animals

    Equivalent to POST /v1/rest/animal/search
    """
    v1SearchAnimals(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestAnimalSearchInput
    ): AnimalBaseResponse @skipAuth

    """
    Searching astronomical objects

    Equivalent to POST /v1/rest/astronomicalObject/search
    """
    v1SearchAstronomicalObjects(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestAstronomicalObjectSearchInput
    ): AstronomicalObjectBaseResponse @skipAuth

    """
    Searching book collections

    Equivalent to POST /v1/rest/bookCollection/search
    """
    v1SearchBookCollections(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestBookCollectionSearchInput
    ): BookCollectionBaseResponse @skipAuth

    """
    Searching book series

    Equivalent to POST /v1/rest/bookSeries/search
    """
    v1SearchBookSeries(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestBookSeriesSearchInput
    ): BookSeriesBaseResponse @skipAuth

    """
    Searching books

    Equivalent to POST /v1/rest/book/search
    """
    v1SearchBooks(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestBookSearchInput
    ): BookBaseResponse @skipAuth

    """
    Searching characters

    Equivalent to POST /v1/rest/character/search
    """
    v1SearchCharacters(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestCharacterSearchInput
    ): CharacterBaseResponse @skipAuth

    """
    Searching comic collections

    Equivalent to POST /v1/rest/comicCollection/search
    """
    v1SearchComicCollections(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestComicCollectionSearchInput
    ): ComicCollectionBaseResponse @skipAuth

    """
    Searching comic series

    Equivalent to POST /v1/rest/comicSeries/search
    """
    v1SearchComicSeries(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestComicSeriesSearchInput
    ): ComicSeriesBaseResponse @skipAuth

    """
    Searching comic strips

    Equivalent to POST /v1/rest/comicStrip/search
    """
    v1SearchComicStrips(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestComicStripSearchInput
    ): ComicStripBaseResponse @skipAuth

    """
    Searching comics

    Equivalent to POST /v1/rest/comics/search
    """
    v1SearchComics(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestComicsSearchInput
    ): ComicsBaseResponse @skipAuth

    """
    Searching companies

    Equivalent to POST /v1/rest/company/search
    """
    v1SearchCompanies(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestCompanySearchInput
    ): CompanyBaseResponse @skipAuth

    """
    Searching conflicts

    Equivalent to POST /v1/rest/conflict/search
    """
    v1SearchConflicts(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestConflictSearchInput
    ): ConflictBaseResponse @skipAuth

    """
    Searching elements

    Equivalent to POST /v1/rest/element/search
    """
    v1SearchElements(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestElementSearchInput
    ): ElementBaseResponse @skipAuth

    """
    Searching episodes

    Equivalent to POST /v1/rest/episode/search
    """
    v1SearchEpisodes(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestEpisodeSearchInput
    ): EpisodeBaseResponse @skipAuth

    """
    Searching foods

    Equivalent to POST /v1/rest/food/search
    """
    v1SearchFoods(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestFoodSearchInput
    ): FoodBaseResponse @skipAuth

    """
    Searching literature

    Equivalent to POST /v1/rest/literature/search
    """
    v1SearchLiterature(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestLiteratureSearchInput
    ): LiteratureBaseResponse @skipAuth

    """
    Searching locations

    Equivalent to POST /v1/rest/location/search
    """
    v1SearchLocations(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestLocationSearchInput
    ): LocationBaseResponse @skipAuth

    """
    Searching magazine series

    Equivalent to POST /v1/rest/magazineSeries/search
    """
    v1SearchMagazineSeries(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestMagazineSeriesSearchInput
    ): MagazineSeriesBaseResponse @skipAuth

    """
    Searching magazines

    Equivalent to POST /v1/rest/magazine/search
    """
    v1SearchMagazines(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestMagazineSearchInput
    ): MagazineBaseResponse @skipAuth

    """
    Searching materials

    Equivalent to POST /v1/rest/material/search
    """
    v1SearchMaterials(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestMaterialSearchInput
    ): MaterialBaseResponse @skipAuth

    """
    Searching medical conditions

    Equivalent to POST /v1/rest/medicalCondition/search
    """
    v1SearchMedicalConditions(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestMedicalConditionSearchInput
    ): MedicalConditionBaseResponse @skipAuth

    """
    Searching movies

    Equivalent to POST /v1/rest/movie/search
    """
    v1SearchMovies(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestMovieSearchInput
    ): MovieBaseResponse @skipAuth

    """
    Searching occupations

    Equivalent to POST /v1/rest/occupation/search
    """
    v1SearchOccupations(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestOccupationSearchInput
    ): OccupationBaseResponse @skipAuth

    """
    Searching organizations

    Equivalent to POST /v1/rest/organization/search
    """
    v1SearchOrganizations(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestOrganizationSearchInput
    ): OrganizationBaseResponse @skipAuth

    """
    Searching performers

    Equivalent to POST /v1/rest/performer/search
    """
    v1SearchPerformers(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestPerformerSearchInput
    ): PerformerBaseResponse @skipAuth

    """
    Searching seasons

    Equivalent to POST /v1/rest/season/search
    """
    v1SearchSeasons(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestSeasonSearchInput
    ): SeasonBaseResponse @skipAuth

    """
    Searching series

    Equivalent to POST /v1/rest/series/search
    """
    v1SearchSeries(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestSeriesSearchInput
    ): SeriesBaseResponse @skipAuth

    """
    Searching soundtracks

    Equivalent to POST /v1/rest/soundtrack/search
    """
    v1SearchSoundtracks(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestSoundtrackSearchInput
    ): SoundtrackBaseResponse @skipAuth

    """
    Searching spacecraft classes

    Equivalent to POST /v1/rest/spacecraftClass/search
    """
    v1SearchSpacecraftClasses(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestSpacecraftClassSearchInput
    ): SpacecraftClassBaseResponse @skipAuth

    """
    Searching spacecrafts

    Equivalent to POST /v1/rest/spacecraft/search
    """
    v1SearchSpacecrafts(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestSpacecraftSearchInput
    ): SpacecraftBaseResponse @skipAuth

    """
    Searching species

    Equivalent to POST /v1/rest/species/search
    """
    v1SearchSpecies(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestSpeciesSearchInput
    ): SpeciesBaseResponse @skipAuth

    """
    Searching staff members

    Equivalent to POST /v1/rest/staff/search
    """
    v1SearchStaff(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestStaffSearchInput
    ): StaffBaseResponse @skipAuth

    """
    Searching technology pieces

    Equivalent to POST /v1/rest/technology/search
    """
    v1SearchTechnology(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestTechnologySearchInput
    ): TechnologyBaseResponse @skipAuth

    """
    Searching titles

    Equivalent to POST /v1/rest/title/search
    """
    v1SearchTitles(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestTitleSearchInput
    ): TitleBaseResponse @skipAuth

    """
    Searching trading card decks

    Equivalent to POST /v1/rest/tradingCardDeck/search
    """
    v1SearchTradingCardDecks(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestTradingCardDeckSearchInput
    ): TradingCardDeckBaseResponse @skipAuth

    """
    Searching trading card sets

    Equivalent to POST /v1/rest/tradingCardSet/search
    """
    v1SearchTradingCardSets(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestTradingCardSetSearchInput
    ): TradingCardSetBaseResponse @skipAuth

    """
    Searching trading cards

    Equivalent to POST /v1/rest/tradingCard/search
    """
    v1SearchTradingCards(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestTradingCardSearchInput
    ): TradingCardBaseResponse @skipAuth

    """
    Searching video games

    Equivalent to POST /v1/rest/videoGame/search
    """
    v1SearchVideoGames(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestVideoGameSearchInput
    ): VideoGameBaseResponse @skipAuth

    """
    Searching video releases

    Equivalent to POST /v1/rest/videoRelease/search
    """
    v1SearchVideoReleases(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestVideoReleaseSearchInput
    ): VideoReleaseBaseResponse @skipAuth

    """
    Searching weapons

    Equivalent to POST /v1/rest/weapon/search
    """
    v1SearchWeapons(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V1RestWeaponSearchInput
    ): WeaponBaseResponse @skipAuth

    """
    Searching astronomical objects (v2)

    Equivalent to POST /v2/rest/astronomicalObject/search
    """
    v2SearchAstronomicalObjects(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V2RestAstronomicalObjectSearchInput
    ): AstronomicalObjectV2BaseResponse @skipAuth

    """
    Searching books (V2)

    Equivalent to POST /v2/rest/book/search
    """
    v2SearchBooks(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V2RestBookSearchInput
    ): BookV2BaseResponse @skipAuth

    """
    Searching companies (V2)

    Equivalent to POST /v2/rest/company/search
    """
    v2SearchCompanies(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V2RestCompanySearchInput
    ): CompanyV2BaseResponse @skipAuth

    """
    Searching elements (V2)

    Equivalent to POST /v2/rest/element/search
    """
    v2SearchElements(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V2RestElementSearchInput
    ): ElementV2BaseResponse @skipAuth

    """
    Searching locations (V2)

    Equivalent to POST /v2/rest/location/search
    """
    v2SearchLocations(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V2RestLocationSearchInput
    ): LocationV2BaseResponse @skipAuth

    """
    Searching occupations (V2)

    Equivalent to POST /v2/rest/occupation/search
    """
    v2SearchOccupations(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V2RestOccupationSearchInput
    ): OccupationV2BaseResponse @skipAuth

    """
    Searching performers (V2)

    Equivalent to POST /v2/rest/performer/search
    """
    v2SearchPerformers(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V2RestPerformerSearchInput
    ): PerformerV2BaseResponse @skipAuth

    """
    Searching spacecraft classes (V2)

    Equivalent to POST /v2/rest/spacecraftClass/search
    """
    v2SearchSpacecraftClasses(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V2RestSpacecraftClassSearchInput
    ): SpacecraftClassV2BaseResponse @skipAuth

    """
    Searching spacecrafts (V2)

    Equivalent to POST /v2/rest/spacecraft/search
    """
    v2SearchSpacecrafts(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V2RestSpacecraftSearchInput
    ): SpacecraftV2BaseResponse @skipAuth

    """
    Searching species (V2)

    Equivalent to POST /v2/rest/species/search
    """
    v2SearchSpecies(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V2RestSpeciesSearchInput
    ): SpeciesV2BaseResponse @skipAuth

    """
    Searching staff members (v2)

    Equivalent to POST /v2/rest/staff/search
    """
    v2SearchStaff(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V2RestStaffSearchInput
    ): StaffV2BaseResponse @skipAuth

    """
    Searching technology pieces (V2)

    Equivalent to POST /v2/rest/technology/search
    """
    v2SearchTechnology(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V2RestTechnologySearchInput
    ): TechnologyV2BaseResponse @skipAuth

    """
    Searching titles (V2)

    Equivalent to POST /v2/rest/title/search
    """
    v2SearchTitles(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V2RestTitleSearchInput
    ): TitleV2BaseResponse @skipAuth

    """
    Searching video releases (V2)

    Equivalent to POST /v2/rest/videoRelease/search
    """
    v2SearchVideoReleases(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V2RestVideoReleaseSearchInput
    ): VideoReleaseV2BaseResponse @skipAuth

    """
    Searching weapons (V2)

    Equivalent to POST /v2/rest/weapon/search
    """
    v2SearchWeapons(
      """
      Zero-based page number
      """
      pageNumber: Int

      """
      Page size
      """
      pageSize: Int

      """
      Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
      """
      sort: String
      search: V2RestWeaponSearchInput
    ): WeaponV2BaseResponse @skipAuth
  }

  input V1RestAnimalSearchInput {
    """
    Whether it should be an avian
    """
    avian: Boolean

    """
    Whether it should be a canine
    """
    canine: Boolean

    """
    Whether it should be an earth animal
    """
    earthAnimal: Boolean

    """
    Whether it should be an earth insect
    """
    earthInsect: Boolean

    """
    Whether it should be a feline
    """
    feline: Boolean

    """
    Animal name
    """
    name: String
  }

  input V1RestAstronomicalObjectSearchInput {
    """
    Type of astronomical object
    """
    astronomicalObjectType: String

    """
    Unique ID of astronomical object containing objects being searched
    """
    locationUid: String

    """
    Astronomical object name
    """
    name: String
  }

  input V1RestBookCollectionSearchInput {
    """
    Minimal number of pages
    """
    numberOfPagesFrom: Int

    """
    Maximal number of pages
    """
    numberOfPagesTo: Int

    """
    Starting year the book collection was published
    """
    publishedYearFrom: Int

    """
    Ending year the book collection was published
    """
    publishedYearTo: Int

    """
    Starting stardate of book collection stories
    """
    stardateFrom: Float

    """
    Ending stardate of book collections stories
    """
    stardateTo: Float

    """
    Book collection title
    """
    title: String

    """
    Starting year of book collection stories
    """
    yearFrom: Int

    """
    Ending year of book collections stories
    """
    yearTo: Int
  }

  input V1RestBookSeriesSearchInput {
    """
    Whether it should be an e-book series
    """
    eBookSeries: Boolean

    """
    Whether it should be a miniseries
    """
    miniseries: Boolean

    """
    Minimal number of books
    """
    numberOfBooksFrom: Int

    """
    Maximal number of books
    """
    numberOfBooksTo: Int

    """
    Starting year the book series was published
    """
    publishedYearFrom: Int

    """
    Ending year the book series was published
    """
    publishedYearTo: Int

    """
    Book series title
    """
    title: String

    """
    Starting year of book series stories
    """
    yearFrom: Int

    """
    Ending year of book series stories
    """
    yearTo: Int
  }

  input V1RestBookSearchInput {
    """
    Whether it should be an anthology
    """
    anthology: Boolean

    """
    Whether it should be an audiobook
    """
    audiobook: Boolean

    """
    Whether it should be an audiobook, abridged
    """
    audiobookAbridged: Boolean

    """
    Starting year the audiobook was published
    """
    audiobookPublishedYearFrom: Int

    """
    Ending year the audiobook was published
    """
    audiobookPublishedYearTo: Int

    """
    Minimal audiobook run time, in minutes
    """
    audiobookRunTimeFrom: Int

    """
    Maximal audiobook run time, in minutes
    """
    audiobookRunTimeTo: Int

    """
    Whether it should be a biography book
    """
    biographyBook: Boolean

    """
    Whether it should be an e-book
    """
    eBook: Boolean

    """
    Whether it should be a novel
    """
    novel: Boolean

    """
    Whether it should be novelization
    """
    novelization: Boolean

    """
    Minimal number of pages
    """
    numberOfPagesFrom: Int

    """
    Maximal number of pages
    """
    numberOfPagesTo: Int

    """
    Starting year the book was published
    """
    publishedYearFrom: Int

    """
    Ending year the book was published
    """
    publishedYearTo: Int

    """
    Whether it should be a reference book
    """
    referenceBook: Boolean

    """
    Whether it should be a role playing book
    """
    rolePlayingBook: Boolean

    """
    Starting stardate of book story
    """
    stardateFrom: Float

    """
    Ending stardate of book story
    """
    stardateTo: Float

    """
    Book title
    """
    title: String

    """
    Starting year of book story
    """
    yearFrom: Int

    """
    Ending year of book story
    """
    yearTo: Int
  }

  input V1RestCharacterSearchInput {
    """
    Whether it should be a alternate reality character
    """
    alternateReality: Boolean

    """
    Whether it should be a deceased character
    """
    deceased: Boolean

    """
    Whether it should be a fictional character (from universe point of view)
    """
    fictionalCharacter: Boolean

    """
    Character gender
    """
    gender: String

    """
    Whether it should be a hologram
    """
    hologram: Boolean

    """
    Whether it should be a mirror universe character
    """
    mirror: Boolean

    """
    Character name
    """
    name: String
  }

  input V1RestComicCollectionSearchInput {
    """
    Minimal number of pages
    """
    numberOfPagesFrom: Int

    """
    Maximal number of pages
    """
    numberOfPagesTo: Int

    """
    Whether it should be an photonovel collection
    """
    photonovel: Boolean

    """
    Starting year the comic collection was published
    """
    publishedYearFrom: Int

    """
    Ending year the comic collection was published
    """
    publishedYearTo: Int

    """
    Starting stardate of comic collection stories
    """
    stardateFrom: Float

    """
    Ending stardate of comic collections stories
    """
    stardateTo: Float

    """
    Comic collection title
    """
    title: String

    """
    Starting year of comic collection stories
    """
    yearFrom: Int

    """
    Ending year of comic collections stories
    """
    yearTo: Int
  }

  input V1RestComicSeriesSearchInput {
    """
    Whether it should be a miniseries
    """
    miniseries: Boolean

    """
    Minimal number of issues
    """
    numberOfIssuesFrom: Int

    """
    Maximal number of issues
    """
    numberOfIssuesTo: Int

    """
    Whether it should be photonovel series
    """
    photonovelSeries: Boolean

    """
    Starting year the comic series was published
    """
    publishedYearFrom: Int

    """
    Ending year the comic series was published
    """
    publishedYearTo: Int

    """
    Starting stardate of comic series stories
    """
    stardateFrom: Float

    """
    Starting stardate of comic series stories
    """
    stardateTo: Float

    """
    Comic series title
    """
    title: String

    """
    Starting year of comic series stories
    """
    yearFrom: Int

    """
    Ending year of comic series stories
    """
    yearTo: Int
  }

  input V1RestComicStripSearchInput {
    """
    Minimal number of pages
    """
    numberOfPagesFrom: Int

    """
    Maximal number of pages
    """
    numberOfPagesTo: Int

    """
    Starting year the comic strip was published
    """
    publishedYearFrom: Int

    """
    Ending year the comic strip was published
    """
    publishedYearTo: Int

    """
    Comic strip title
    """
    title: String

    """
    Starting year of comic strip story
    """
    yearFrom: Int

    """
    Ending year of comic strip story
    """
    yearTo: Int
  }

  input V1RestComicsSearchInput {
    """
    Whether it should be an adaptation of an episode or a movie
    """
    adaptation: Boolean

    """
    Minimal number of pages
    """
    numberOfPagesFrom: Int

    """
    Maximal number of pages
    """
    numberOfPagesTo: Int

    """
    Whether it should be a photonovel
    """
    photonovel: Boolean

    """
    Starting year the comics was published
    """
    publishedYearFrom: Int

    """
    Ending year the comics was published
    """
    publishedYearTo: Int

    """
    Starting stardate of comics story
    """
    stardateFrom: Float

    """
    Ending stardate of comics story
    """
    stardateTo: Float

    """
    Comics title
    """
    title: String

    """
    Starting year of comics story
    """
    yearFrom: Int

    """
    Ending year of comics story
    """
    yearTo: Int
  }

  input V1RestCompanySearchInput {
    """
    Whether it should be a broadcaster
    """
    broadcaster: Boolean

    """
    Whether it should be a collectible company
    """
    collectibleCompany: Boolean

    """
    Whether it should be a conglomerate
    """
    conglomerate: Boolean

    """
    Whether it should be a digital visual effects company
    """
    digitalVisualEffectsCompany: Boolean

    """
    Whether it should be a distributor
    """
    distributor: Boolean

    """
    Whether it should be a film equipment company
    """
    filmEquipmentCompany: Boolean

    """
    Whether it should be a game company
    """
    gameCompany: Boolean

    """
    Whether it should be a make-up effects studio
    """
    makeUpEffectsStudio: Boolean

    """
    Whether it should be a matte painting company
    """
    mattePaintingCompany: Boolean

    """
    Whether it should be a model and miniature effects company
    """
    modelAndMiniatureEffectsCompany: Boolean

    """
    Company name
    """
    name: String

    """
    Whether it should be a post-production company
    """
    postProductionCompany: Boolean

    """
    Whether it should be a production company
    """
    productionCompany: Boolean

    """
    Whether it should be a prop company
    """
    propCompany: Boolean

    """
    Whether it should be a record label
    """
    recordLabel: Boolean

    """
    Whether it should be a special effects company
    """
    specialEffectsCompany: Boolean

    """
    Whether it should be a TV and film production company
    """
    tvAndFilmProductionCompany: Boolean

    """
    Whether it should be a video game company
    """
    videoGameCompany: Boolean
  }

  input V1RestConflictSearchInput {
    """
    Whether this conflict should be from alternate reality
    """
    alternateReality: Boolean

    """
    Whether this conflict should be a Dominion war battle
    """
    dominionWarBattle: Boolean

    """
    Whether it should be an Earth conflict
    """
    earthConflict: Boolean

    """
    Whether this conflict should be a part of war involving Federation
    """
    federationWar: Boolean

    """
    Whether this conflict should be a part of war involving the Klingons
    """
    klingonWar: Boolean

    """
    Conflict name
    """
    name: String

    """
    Starting year of the conflict
    """
    yearFrom: Int

    """
    Ending year of the conflict
    """
    yearTo: Int
  }

  input V1RestElementSearchInput {
    """
    Whether it should belong to Gamma series
    """
    gammaSeries: Boolean

    """
    Whether it should belong to Hypersonic series
    """
    hypersonicSeries: Boolean

    """
    Whether it should belong to Mega series
    """
    megaSeries: Boolean

    """
    Element name
    """
    name: String

    """
    Whether it should belong to Omega series
    """
    omegaSeries: Boolean

    """
    Element symbol
    """
    symbol: String

    """
    Whether it should belong to Transonic series
    """
    transonicSeries: Boolean

    """
    Whether it should be a transuranium
    """
    transuranium: Boolean

    """
    Whether it should belong to World series
    """
    worldSeries: Boolean
  }

  input V1RestEpisodeSearchInput {
    """
    Minimal episode number in season
    """
    episodeNumberFrom: Int

    """
    Maximal episode number in season
    """
    episodeNumberTo: Int

    """
    Whether it should be a feature length episode
    """
    featureLength: Boolean

    """
    Minimal date the episode script was completed
    """
    finalScriptDateFrom: String

    """
    Maximal date the episode script was completed
    """
    finalScriptDateTo: String

    """
    Production serial number
    """
    productionSerialNumber: String

    """
    Minimal season number
    """
    seasonNumberFrom: Int

    """
    Maximal season number
    """
    seasonNumberTo: Int

    """
    Starting stardate of episode story
    """
    stardateFrom: Float

    """
    Ending stardate of episode story
    """
    stardateTo: Float

    """
    Episode title
    """
    title: String

    """
    Minimal date the episode was first aired in the United States
    """
    usAirDateFrom: String

    """
    Maximal date the episode was first aired in the United States
    """
    usAirDateTo: String

    """
    Starting year of episode story
    """
    yearFrom: Int

    """
    Ending year of episode story
    """
    yearTo: Int
  }

  input V1RestFoodSearchInput {
    """
    Whether it should be an alcoholic beverage
    """
    alcoholicBeverage: Boolean

    """
    Whether it should be a beverage
    """
    beverage: Boolean

    """
    Whether it should be a dessert
    """
    dessert: Boolean

    """
    Whether it should be of earthly origin
    """
    earthlyOrigin: Boolean

    """
    Whether it should be a fruit
    """
    fruit: Boolean

    """
    Whether it should be an herb or a spice
    """
    herbOrSpice: Boolean

    """
    Whether it should be a juice
    """
    juice: Boolean

    """
    Food name
    """
    name: String

    """
    Whether it should be a sauce
    """
    sauce: Boolean

    """
    Whether it should be a soup
    """
    soup: Boolean

    """
    Whether it should be a tea
    """
    tea: Boolean
  }

  input V1RestLiteratureSearchInput {
    """
    Whether it should be of earthly origin
    """
    earthlyOrigin: Boolean

    """
    Whether it should be a religious literature
    """
    religiousLiterature: Boolean

    """
    Whether it should be a report
    """
    report: Boolean

    """
    Whether it should be a scientific literature
    """
    scientificLiterature: Boolean

    """
    Whether it should be a Shakespearean work
    """
    shakespeareanWork: Boolean

    """
    Whether it should be a technical manual
    """
    technicalManual: Boolean

    """
    Literature title
    """
    title: String
  }

  input V1RestLocationSearchInput {
    """
    Whether this location should be from alternate reality
    """
    alternateReality: Boolean

    """
    Whether it should be a Bajoran settlement
    """
    bajoranSettlement: Boolean

    """
    Whether it should be a body of water
    """
    bodyOfWater: Boolean

    """
    Whether it should be a building interior
    """
    buildingInterior: Boolean

    """
    Whether it should be a colony
    """
    colony: Boolean

    """
    Whether it should be a country
    """
    country: Boolean

    """
    Whether it should be a DS9 establishment
    """
    ds9Establishment: Boolean

    """
    Whether it should be an earthly location
    """
    earthlyLocation: Boolean

    """
    Whether it should be a establishment
    """
    establishment: Boolean

    """
    Whether it should be a fictional location
    """
    fictionalLocation: Boolean

    """
    Whether it should be a geographical location
    """
    geographicalLocation: Boolean

    """
    Whether it should be a landform
    """
    landform: Boolean

    """
    Whether it should be a landmark
    """
    landmark: Boolean

    """
    Whether it should be a medical establishment
    """
    medicalEstablishment: Boolean

    """
    Whether this location should be from mirror universe
    """
    mirror: Boolean

    """
    Location name
    """
    name: String

    """
    Whether it should be a religious location
    """
    religiousLocation: Boolean

    """
    Whether it should be a road
    """
    road: Boolean

    """
    Whether it should be a school
    """
    school: Boolean

    """
    Whether it should be a settlement
    """
    settlement: Boolean

    """
    Whether it should be a shipyard
    """
    shipyard: Boolean

    """
    Whether it should be a structure
    """
    structure: Boolean

    """
    Whether it should be a subnational entity
    """
    subnationalEntity: Boolean

    """
    Whether it should be a US settlement
    """
    usSettlement: Boolean
  }

  input V1RestMagazineSeriesSearchInput {
    """
    Minimal number of issues
    """
    numberOfIssuesFrom: Int

    """
    Maximal number of issues
    """
    numberOfIssuesTo: Int

    """
    Starting year the magazine series was published
    """
    publishedYearFrom: Int

    """
    Ending year the magazine series was published
    """
    publishedYearTo: Int

    """
    Magazine series title
    """
    title: String
  }

  input V1RestMagazineSearchInput {
    """
    Minimal number of pages
    """
    numberOfPagesFrom: Int

    """
    Maximal number of pages
    """
    numberOfPagesTo: Int

    """
    Starting year the magazine was published
    """
    publishedYearFrom: Int

    """
    Ending year the magazine was published
    """
    publishedYearTo: Int

    """
    Magazine title
    """
    title: String
  }

  input V1RestMaterialSearchInput {
    """
    Whether it should be an alloy or a composite
    """
    alloyOrComposite: Boolean

    """
    Whether it should be a biochemical compound
    """
    biochemicalCompound: Boolean

    """
    Whether it should be a chemical compound
    """
    chemicalCompound: Boolean

    """
    Whether it should be a drug
    """
    drug: Boolean

    """
    Whether it should be an explosive
    """
    explosive: Boolean

    """
    Whether it should be a fuel
    """
    fuel: Boolean

    """
    Whether it should be a gemstone
    """
    gemstone: Boolean

    """
    Whether it should be a mineral
    """
    mineral: Boolean

    """
    Material name
    """
    name: String

    """
    Whether it should be a poisonous substance
    """
    poisonousSubstance: Boolean

    """
    Whether it should be a precious material
    """
    preciousMaterial: Boolean
  }

  input V1RestMedicalConditionSearchInput {
    """
    Medical condition name
    """
    name: String

    """
    Whether it should be a psychological condition
    """
    psychologicalCondition: Boolean
  }

  input V1RestMovieSearchInput {
    """
    Starting stardate of movie story
    """
    stardateFrom: Float

    """
    Ending stardate of movie story
    """
    stardateTo: Float

    """
    Movie title
    """
    title: String

    """
    Minimal date the movie was first released in the United States
    """
    usReleaseDateFrom: String

    """
    Maximal date the movie was first released in the United States
    """
    usReleaseDateTo: String

    """
    Starting year of movie story
    """
    yearFrom: Int

    """
    Ending year of movie story
    """
    yearTo: Int
  }

  input V1RestOccupationSearchInput {
    """
    Whether it should be a legal occupation
    """
    legalOccupation: Boolean

    """
    Whether it should be a medical occupation
    """
    medicalOccupation: Boolean

    """
    Occupation name
    """
    name: String

    """
    Whether it should be a scientific occupation
    """
    scientificOccupation: Boolean
  }

  input V1RestOrganizationSearchInput {
    """
    Whether this organization should be from alternate reality
    """
    alternateReality: Boolean

    """
    Whether it should be a government
    """
    government: Boolean

    """
    Whether it should be a government agency
    """
    governmentAgency: Boolean

    """
    Whether it should be an intergovernmental organization
    """
    intergovernmentalOrganization: Boolean

    """
    Whether it should be a law enforcement agency
    """
    lawEnforcementAgency: Boolean

    """
    Whether it should be a medical organization
    """
    medicalOrganization: Boolean

    """
    Whether it should be a military organization
    """
    militaryOrganization: Boolean

    """
    Whether it should be a military unit
    """
    militaryUnit: Boolean

    """
    Whether this organization should be from mirror universe
    """
    mirror: Boolean

    """
    Organization name
    """
    name: String

    """
    Whether it should be a prison or penal colony
    """
    prisonOrPenalColony: Boolean

    """
    Whether it should be a research organization
    """
    researchOrganization: Boolean

    """
    Whether it should be a sport organization
    """
    sportOrganization: Boolean
  }

  input V1RestPerformerSearchInput {
    """
    Whether it should be an animal performer
    """
    animalPerformer: Boolean

    """
    Performer birth name
    """
    birthName: String

    """
    Minimal date the performer was born
    """
    dateOfBirthFrom: String

    """
    Maximal date the performer was born
    """
    dateOfBirthTo: String

    """
    Minimal date the performer died
    """
    dateOfDeathFrom: String

    """
    Maximal date the performer died
    """
    dateOfDeathTo: String

    """
    Whether it should be a performer that appeared in Star Trek: Discovery
    """
    disPerformer: Boolean

    """
    Whether it should be a performer that appeared in Star Trek: Deep Space Nine
    """
    ds9Performer: Boolean

    """
    Whether it should be a performer that appeared in Star Trek: Enterprise
    """
    entPerformer: Boolean

    """
    Whether it should be a performer that appeared in a Star Trek movie
    """
    filmPerformer: Boolean

    """
    Performer gender
    """
    gender: String

    """
    Performer name
    """
    name: String

    """
    Place the performer was born
    """
    placeOfBirth: String

    """
    Place the performer died
    """
    placeOfDeath: String

    """
    Whether it should be a stand-in performer
    """
    standInPerformer: Boolean

    """
    Whether it should be a stunt performer
    """
    stuntPerformer: Boolean

    """
    Whether it should be a performer that appeared in Star Trek: The Animated Series
    """
    tasPerformer: Boolean

    """
    Whether it should be a performer that appeared in Star Trek: The Next Generation
    """
    tngPerformer: Boolean

    """
    Whether it should be a performer that appeared in Star Trek: The Original Series
    """
    tosPerformer: Boolean

    """
    Whether it should be a video game performer
    """
    videoGamePerformer: Boolean

    """
    Whether it should be a voice performer
    """
    voicePerformer: Boolean

    """
    Whether it should be a performer that appeared in Star Trek: Voyager
    """
    voyPerformer: Boolean
  }

  input V1RestSeasonSearchInput {
    """
    Minimal number of episodes in season
    """
    numberOfEpisodesFrom: Int

    """
    Maximal number of episodes in season
    """
    numberOfEpisodesTo: Int

    """
    Minimal season number
    """
    seasonNumberFrom: Int

    """
    Maximal season number
    """
    seasonNumberTo: Int

    """
    Season title
    """
    title: String
  }

  input V1RestSeriesSearchInput {
    """
    Series abbreviation
    """
    abbreviation: String

    """
    Minimal date the series originally ran to
    """
    originalRunEndDateFrom: String

    """
    Maximal date the series originally ran to
    """
    originalRunEndDateTo: String

    """
    Minimal date the series originally ran from
    """
    originalRunStartDateFrom: String

    """
    Maximal date the series originally ran from
    """
    originalRunStartDateTo: String

    """
    Minimal year the series production ended
    """
    productionEndYearFrom: Int

    """
    Maximal year the series production ended
    """
    productionEndYearTo: Int

    """
    Minimal year the series production started
    """
    productionStartYearFrom: Int

    """
    Maximal year the series production started
    """
    productionStartYearTo: Int

    """
    Series title
    """
    title: String
  }

  input V1RestSoundtrackSearchInput {
    """
    Minimal length, in seconds
    """
    lengthFrom: Int

    """
    Maximal length, in seconds
    """
    lengthTo: Int

    """
    Minimal release date
    """
    releaseDateFrom: String

    """
    Maximal release date
    """
    releaseDateTo: String

    """
    Soundtrack title
    """
    title: String
  }

  input V1RestSpacecraftClassSearchInput {
    """
    Whether this spacecraft class should be from alternate reality
    """
    alternateReality: Boolean

    """
    Spacecraft class name
    """
    name: String

    """
    Whether it should be a warp-capable spacecraft class
    """
    warpCapableSpecies: Boolean
  }

  input V1RestSpacecraftSearchInput {
    """
    Spacecraft name
    """
    name: String
  }

  input V1RestSpeciesSearchInput {
    """
    Whether this species should be from alternate reality
    """
    alternateReality: Boolean

    """
    Whether it should be an extinct species
    """
    extinctSpecies: Boolean

    """
    Whether it should be an extra-galactic species
    """
    extraGalacticSpecies: Boolean

    """
    Whether it should be a humanoid species
    """
    humanoidSpecies: Boolean

    """
    Species name
    """
    name: String

    """
    Whether it should be a non-corporeal species
    """
    nonCorporealSpecies: Boolean

    """
    Whether it should be a reptilian species
    """
    reptilianSpecies: Boolean

    """
    Whether it should be a shapeshifting species
    """
    shapeshiftingSpecies: Boolean

    """
    Whether it should be a spaceborne species
    """
    spaceborneSpecies: Boolean

    """
    Whether it should be a telepathic species
    """
    telepathicSpecies: Boolean

    """
    Whether it should be a trans-dimensional species
    """
    transDimensionalSpecies: Boolean

    """
    Whether it should be a unnamed species
    """
    unnamedSpecies: Boolean

    """
    Whether it should be a warp-capable species
    """
    warpCapableSpecies: Boolean
  }

  input V1RestStaffSearchInput {
    """
    Whether this person should be from art department
    """
    artDepartment: Boolean

    """
    Whether this person should be an art director
    """
    artDirector: Boolean

    """
    Whether this person should be an assistant or second unit director director
    """
    assistantOrSecondUnitDirector: Boolean

    """
    Whether this person should be an audio author
    """
    audioAuthor: Boolean

    """
    Whether this person should be an author
    """
    author: Boolean

    """
    Staff birth name
    """
    birthName: String

    """
    Whether this person should be a calendar artist
    """
    calendarArtist: Boolean

    """
    Whether this person should be from camera and electrical department
    """
    cameraAndElectricalDepartment: Boolean

    """
    Whether this person should be from casting department
    """
    castingDepartment: Boolean

    """
    Whether this person should be a part of CBS digital staff
    """
    cbsDigitalStaff: Boolean

    """
    Whether this person should be a cinematographer
    """
    cinematographer: Boolean

    """
    Whether this person should be a comic artist
    """
    comicArtist: Boolean

    """
    Whether this person should be a comic author
    """
    comicAuthor: Boolean

    """
    Whether this person should be a comic color artist
    """
    comicColorArtist: Boolean

    """
    Whether this person should be a comic ink artist
    """
    comicInkArtist: Boolean

    """
    Whether this person should be a comic interior artist
    """
    comicInteriorArtist: Boolean

    """
    Whether this person should be a comic letter artist
    """
    comicLetterArtist: Boolean

    """
    Whether this person should be a comic pencil artist
    """
    comicPencilArtist: Boolean

    """
    Whether this person should be a comic strip artist
    """
    comicStripArtist: Boolean

    """
    Whether this person should be a composer
    """
    composer: Boolean

    """
    Whether this person should be from costume department
    """
    costumeDepartment: Boolean

    """
    Whether this person should be a custume designer
    """
    costumeDesigner: Boolean

    """
    Minimal date the staff was born
    """
    dateOfBirthFrom: String

    """
    Maximal date the staff was born
    """
    dateOfBirthTo: String

    """
    Minimal date the staff died
    """
    dateOfDeathFrom: String

    """
    Maximal date the staff died
    """
    dateOfDeathTo: String

    """
    Whether this person should be a director
    """
    director: Boolean

    """
    Whether this person should be an exhibit and attraction staff
    """
    exhibitAndAttractionStaff: Boolean

    """
    Whether this person should be a film editor
    """
    filmEditor: Boolean

    """
    Whether this person should be a game artist
    """
    gameArtist: Boolean

    """
    Whether this person should be a game author
    """
    gameAuthor: Boolean

    """
    Staff gender
    """
    gender: String

    """
    Whether this person should be a part of ILM production staff
    """
    ilmProductionStaff: Boolean

    """
    Whether this person should be a linguist
    """
    linguist: Boolean

    """
    Whether this person should be a location staff
    """
    locationStaff: Boolean

    """
    Whether this person should be a make-up staff
    """
    makeupStaff: Boolean

    """
    Whether this person should be from music department
    """
    musicDepartment: Boolean

    """
    Staff name
    """
    name: String

    """
    Whether this person should be a novel artist
    """
    novelArtist: Boolean

    """
    Whether this person should be a novel author
    """
    novelAuthor: Boolean

    """
    Whether this person should be a personal assistant
    """
    personalAssistant: Boolean

    """
    Place the staff was born
    """
    placeOfBirth: String

    """
    Place the staff died
    """
    placeOfDeath: String

    """
    Whether this person should be a producer
    """
    producer: Boolean

    """
    Whether this person should be a production associate
    """
    productionAssociate: Boolean

    """
    Whether this person should be a production designer
    """
    productionDesigner: Boolean

    """
    Whether this person should be a production staff
    """
    productionStaff: Boolean

    """
    Whether this person should be a publication artist
    """
    publicationArtist: Boolean

    """
    Whether this person should be a publication designer
    """
    publicationDesigner: Boolean

    """
    Whether this person should be a publication editor
    """
    publicationEditor: Boolean

    """
    Whether this person should be a publication staff
    """
    publicationStaff: Boolean

    """
    Whether this person should be a publicity artist
    """
    publicityArtist: Boolean

    """
    Whether this person should be a reference artist
    """
    referenceArtist: Boolean

    """
    Whether this person should be a reference author
    """
    referenceAuthor: Boolean

    """
    Whether this person should be a science consultant
    """
    scienceConsultant: Boolean

    """
    Whether this person should be from sound department
    """
    soundDepartment: Boolean

    """
    Whether this person should be a special and visual effects staff
    """
    specialAndVisualEffectsStaff: Boolean

    """
    Whether this person should be a special features artist
    """
    specialFeaturesStaff: Boolean

    """
    Whether this person should be a story editor
    """
    storyEditor: Boolean

    """
    Whether this person should be a studio executive
    """
    studioExecutive: Boolean

    """
    Whether this person should be from stunt department
    """
    stuntDepartment: Boolean

    """
    Whether this person should be from transportation department
    """
    transportationDepartment: Boolean

    """
    Whether this person is video game production staff
    """
    videoGameProductionStaff: Boolean

    """
    Whether this person should be a writer
    """
    writer: Boolean
  }

  input V1RestTechnologySearchInput {
    """
    Whether it should be a Borg component
    """
    borgComponent: Boolean

    """
    Whether it should be a Borg technology
    """
    borgTechnology: Boolean

    """
    Whether it should be a communications technology
    """
    communicationsTechnology: Boolean

    """
    Whether it should be a technology related to computer programming
    """
    computerProgramming: Boolean

    """
    Whether it should be a computer technology
    """
    computerTechnology: Boolean

    """
    Whether it should be a culinary tool
    """
    culinaryTool: Boolean

    """
    Whether it should be a database
    """
    database: Boolean

    """
    Whether it should be a energy technology
    """
    energyTechnology: Boolean

    """
    Whether it should be a engineering tool
    """
    engineeringTool: Boolean

    """
    Whether it should be a fictional technology
    """
    fictionalTechnology: Boolean

    """
    Whether it should be a holographic technology
    """
    holographicTechnology: Boolean

    """
    Whether it should be a household tool
    """
    householdTool: Boolean

    """
    Whether it should be a identification technology
    """
    identificationTechnology: Boolean

    """
    Whether it should be a life support technology
    """
    lifeSupportTechnology: Boolean

    """
    Whether it should be a medical equipment
    """
    medicalEquipment: Boolean

    """
    Technology name
    """
    name: String

    """
    Whether it should be a sensor technology
    """
    sensorTechnology: Boolean

    """
    Whether it should be a shield technology
    """
    shieldTechnology: Boolean

    """
    Whether it should be a subroutine
    """
    subroutine: Boolean

    """
    Whether it should be a tool
    """
    tool: Boolean

    """
    Whether it's a transporter technology
    """
    transporterTechnology: Boolean
  }

  input V1RestTitleSearchInput {
    """
    Whether it should be a fleet rank
    """
    fleetRank: Boolean

    """
    Whether it should be a military rank
    """
    militaryRank: Boolean

    """
    Whether this title should be from mirror universe
    """
    mirror: Boolean

    """
    Title name
    """
    name: String

    """
    Whether it should be a position
    """
    position: Boolean

    """
    Whether it should be a religious title
    """
    religiousTitle: Boolean
  }

  input V1RestTradingCardDeckSearchInput {
    """
    Trading card deck name
    """
    name: String

    """
    UID of trading card set
    """
    tradingCardSetUid: String
  }

  input V1RestTradingCardSetSearchInput {
    """
    Minimal number of boxes per case
    """
    boxesPerCaseFrom: Int

    """
    Minimal number of boxes per case
    """
    boxesPerCaseTo: Int

    """
    Minimal card height, in inches
    """
    cardHeightFrom: Float

    """
    Minimal card height, in inches
    """
    cardHeightTo: Float

    """
    Minimal card width, in inches
    """
    cardWidthFrom: Float

    """
    Minimal card width, in inches
    """
    cardWidthTo: Float

    """
    Minimal number of cards per deck
    """
    cardsPerPackFrom: Int

    """
    Minimal number of cards per deck
    """
    cardsPerPackTo: Int

    """
    Trading card set name
    """
    name: String

    """
    Minimal number of packs per box
    """
    packsPerBoxFrom: Int

    """
    Minimal number of packs per box
    """
    packsPerBoxTo: Int

    """
    Minimal production run
    """
    productionRunFrom: Int

    """
    Minimal production run
    """
    productionRunTo: Int

    """
    Production run unit
    """
    productionRunUnit: String

    """
    Starting year the trading card set was released
    """
    releaseYearFrom: Int

    """
    Ending year the trading card set was released
    """
    releaseYearTo: Int
  }

  input V1RestTradingCardSearchInput {
    """
    Trading card name
    """
    name: String

    """
    UID of trading card deck
    """
    tradingCardDeckUid: String

    """
    UID of trading card set
    """
    tradingCardSetUid: String
  }

  input V1RestVideoGameSearchInput {
    """
    Minimal date the video game was first released
    """
    releaseDateFrom: String

    """
    Minimal date the video game was first released
    """
    releaseDateTo: String

    """
    Video game title
    """
    title: String
  }

  input V1RestVideoReleaseSearchInput {
    """
    Minimal run time, in minutes
    """
    runTimeFrom: Int

    """
    Minimal run time, in minutes
    """
    runTimeTo: Int

    """
    Video release title
    """
    title: String

    """
    Starting year of video release story
    """
    yearFrom: Int

    """
    Ending year of video release story
    """
    yearTo: Int
  }

  input V1RestWeaponSearchInput {
    """
    Whether this weapon should be from alternate reality
    """
    alternateReality: Boolean

    """
    Whether it should be a hand-help weapon
    """
    handHeldWeapon: Boolean

    """
    Whether it should be a laser technology
    """
    laserTechnology: Boolean

    """
    Whether this weapon should be from mirror universe
    """
    mirror: Boolean

    """
    Weapon name
    """
    name: String

    """
    Whether it should be a phaser technology
    """
    phaserTechnology: Boolean

    """
    Whether it should be a photonic technology
    """
    photonicTechnology: Boolean

    """
    Whether it should be a plasma technology
    """
    plasmaTechnology: Boolean
  }

  input V2RestAstronomicalObjectSearchInput {
    """
    Type of astronomical object
    """
    astronomicalObjectType: String

    """
    Unique ID of astronomical object containing objects being searched
    """
    locationUid: String

    """
    Astronomical object name
    """
    name: String
  }

  input V2RestBookSearchInput {
    """
    Whether it should be an anthology
    """
    anthology: Boolean

    """
    Whether it should be an audiobook
    """
    audiobook: Boolean

    """
    Whether it should be an audiobook, abridged
    """
    audiobookAbridged: Boolean

    """
    Starting year the audiobook was published
    """
    audiobookPublishedYearFrom: Int

    """
    Ending year the audiobook was published
    """
    audiobookPublishedYearTo: Int

    """
    Minimal audiobook run time, in minutes
    """
    audiobookRunTimeFrom: Int

    """
    Maximal audiobook run time, in minutes
    """
    audiobookRunTimeTo: Int

    """
    Whether it should be a biography book
    """
    biographyBook: Boolean

    """
    Whether it should be an e-book
    """
    eBook: Boolean

    """
    Whether it should be a novel
    """
    novel: Boolean

    """
    Whether it should be novelization
    """
    novelization: Boolean

    """
    Minimal number of pages
    """
    numberOfPagesFrom: Int

    """
    Maximal number of pages
    """
    numberOfPagesTo: Int

    """
    Starting year the book was published
    """
    publishedYearFrom: Int

    """
    Ending year the book was published
    """
    publishedYearTo: Int

    """
    Whether it should be a reference book
    """
    referenceBook: Boolean

    """
    Whether it should be a role playing book
    """
    rolePlayingBook: Boolean

    """
    Starting stardate of book story
    """
    stardateFrom: Float

    """
    Ending stardate of book story
    """
    stardateTo: Float

    """
    Book title
    """
    title: String

    """
    Whether it should be an unauthorized publication
    """
    unauthorizedPublication: Boolean

    """
    Starting year of book story
    """
    yearFrom: Int

    """
    Ending year of book story
    """
    yearTo: Int
  }

  input V2RestCompanySearchInput {
    """
    Whether it should be a broadcaster
    """
    broadcaster: Boolean

    """
    Whether it should be a collectible company
    """
    collectibleCompany: Boolean

    """
    Whether it should be a conglomerate
    """
    conglomerate: Boolean

    """
    Whether it should be a digital visual effects company
    """
    digitalVisualEffectsCompany: Boolean

    """
    Whether it should be a distributor
    """
    distributor: Boolean

    """
    Whether it should be a film equipment company
    """
    filmEquipmentCompany: Boolean

    """
    Whether it should be a game company
    """
    gameCompany: Boolean

    """
    Whether it should be a make-up effects studio
    """
    makeUpEffectsStudio: Boolean

    """
    Whether it should be a matte painting company
    """
    mattePaintingCompany: Boolean

    """
    Whether it should be a model and miniature effects company
    """
    modelAndMiniatureEffectsCompany: Boolean

    """
    Company name
    """
    name: String

    """
    Whether it should be a post-production company
    """
    postProductionCompany: Boolean

    """
    Whether it should be a production company
    """
    productionCompany: Boolean

    """
    Whether it should be a prop company
    """
    propCompany: Boolean

    """
    Whether it should be a publication art studio
    """
    publicationArtStudio: Boolean

    """
    Whether it should be a publisher
    """
    publisher: Boolean

    """
    Whether it should be a record label
    """
    recordLabel: Boolean

    """
    Whether it should be a special effects company
    """
    specialEffectsCompany: Boolean

    """
    Whether it should be a streaming service
    """
    streamingService: Boolean

    """
    Whether it should be a TV and film production company
    """
    tvAndFilmProductionCompany: Boolean

    """
    Whether it should be a video game company
    """
    videoGameCompany: Boolean

    """
    Whether it should be a visual effects company
    """
    visualEffectsCompany: Boolean
  }

  input V2RestElementSearchInput {
    """
    Whether it should belong to Gamma series
    """
    gammaSeries: Boolean

    """
    Whether it should belong to Hypersonic series
    """
    hypersonicSeries: Boolean

    """
    Whether it should belong to Mega series
    """
    megaSeries: Boolean

    """
    Element name
    """
    name: String

    """
    Whether it should belong to Omega series
    """
    omegaSeries: Boolean

    """
    Element symbol
    """
    symbol: String

    """
    Whether it should belong to Transonic series
    """
    transonicSeries: Boolean

    """
    Whether it should be a transuranic
    """
    transuranic: Boolean

    """
    Whether it should belong to World series
    """
    worldSeries: Boolean
  }

  input V2RestLocationSearchInput {
    """
    Whether this location should be from alternate reality
    """
    alternateReality: Boolean

    """
    Whether it should be a Bajoran settlement
    """
    bajoranSettlement: Boolean

    """
    Whether it should be a body of water
    """
    bodyOfWater: Boolean

    """
    Whether it should be a building interior
    """
    buildingInterior: Boolean

    """
    Whether it should be a colony
    """
    colony: Boolean

    """
    Whether it should be a country
    """
    country: Boolean

    """
    Whether it should be a DS9 establishment
    """
    ds9Establishment: Boolean

    """
    Whether it should be an earthly location
    """
    earthlyLocation: Boolean

    """
    Whether it should be a establishment
    """
    establishment: Boolean

    """
    Whether it should be a fictional location
    """
    fictionalLocation: Boolean

    """
    Whether it should be a geographical location
    """
    geographicalLocation: Boolean

    """
    Whether it should be a landform
    """
    landform: Boolean

    """
    Whether it should be a medical establishment
    """
    medicalEstablishment: Boolean

    """
    Whether this location should be from mirror universe
    """
    mirror: Boolean

    """
    Whether it should be a mythological location
    """
    mythologicalLocation: Boolean

    """
    Location name
    """
    name: String

    """
    Whether it should be a Qo'nos location
    """
    qonosLocation: Boolean

    """
    Whether it should be a religious location
    """
    religiousLocation: Boolean

    """
    Whether it should be a residence
    """
    residence: Boolean

    """
    Whether it should be a restaurant
    """
    restaurant: Boolean

    """
    Whether it should be a road
    """
    road: Boolean

    """
    Whether it should be a school
    """
    school: Boolean

    """
    Whether it should be a settlement
    """
    settlement: Boolean

    """
    Whether it should be a shipyard
    """
    shipyard: Boolean

    """
    Whether it should be a structure
    """
    structure: Boolean

    """
    Whether it should be a subnational entity
    """
    subnationalEntity: Boolean

    """
    Whether it should be a US settlement
    """
    usSettlement: Boolean
  }

  input V2RestOccupationSearchInput {
    """
    Whether it should be an arts occupation
    """
    artsOccupation: Boolean

    """
    Whether it should be a communication occupation
    """
    communicationOccupation: Boolean

    """
    Whether it should be an economic occupation
    """
    economicOccupation: Boolean

    """
    Whether it should be an education occupation
    """
    educationOccupation: Boolean

    """
    Whether it should be an entertainment occupation
    """
    entertainmentOccupation: Boolean

    """
    Whether it should be an illegal occupation
    """
    illegalOccupation: Boolean

    """
    Whether it should be a legal occupation
    """
    legalOccupation: Boolean

    """
    Whether it should be a medical occupation
    """
    medicalOccupation: Boolean

    """
    Occupation name
    """
    name: String

    """
    Whether it should be a scientific occupation
    """
    scientificOccupation: Boolean

    """
    Whether it should be a sports occupation
    """
    sportsOccupation: Boolean

    """
    Whether it should be a victual occupation
    """
    victualOccupation: Boolean
  }

  input V2RestPerformerSearchInput {
    """
    Whether it should be an animal performer
    """
    animalPerformer: Boolean

    """
    Whether it should be an audiobook performer
    """
    audiobookPerformer: Boolean

    """
    Performer birth name
    """
    birthName: String

    """
    Whether it should be a cut performer
    """
    cutPerformer: Boolean

    """
    Minimal date the performer was born
    """
    dateOfBirthFrom: String

    """
    Maximal date the performer was born
    """
    dateOfBirthTo: String

    """
    Minimal date the performer died
    """
    dateOfDeathFrom: String

    """
    Maximal date the performer died
    """
    dateOfDeathTo: String

    """
    Whether it should be a performer that appeared in Star Trek: Discovery
    """
    disPerformer: Boolean

    """
    Whether it should be a performer that appeared in Star Trek: Deep Space Nine
    """
    ds9Performer: Boolean

    """
    Whether it should be a performer that appeared in Star Trek: Enterprise
    """
    entPerformer: Boolean

    """
    Whether it should be a performer that appeared in a Star Trek movie
    """
    filmPerformer: Boolean

    """
    Performer gender
    """
    gender: String

    """
    Whether it should be a performer that appeared in Star Trek: Lower Decks
    """
    ldPerformer: Boolean

    """
    Performer name
    """
    name: String

    """
    Whether it should be a performer that appeared in Star Trek: Picard
    """
    picPerformer: Boolean

    """
    Place the performer was born
    """
    placeOfBirth: String

    """
    Place the performer died
    """
    placeOfDeath: String

    """
    Whether it should be a performer that appeared in Star Trek: Prodigy
    """
    proPerformer: Boolean

    """
    Whether it should be a puppeteer
    """
    puppeteer: Boolean

    """
    Whether it should be a performer that appeared in Star Trek: Strange New Worlds
    """
    snwPerformer: Boolean

    """
    Whether it should be a performer that appeared in Star Trek: Short Treks
    """
    stPerformer: Boolean

    """
    Whether it should be a stand-in performer
    """
    standInPerformer: Boolean

    """
    Whether it should be a stunt performer
    """
    stuntPerformer: Boolean

    """
    Whether it should be a performer that appeared in Star Trek: The Animated Series
    """
    tasPerformer: Boolean

    """
    Whether it should be a performer that appeared in Star Trek: The Next Generation
    """
    tngPerformer: Boolean

    """
    Whether it should be a performer that appeared in Star Trek: The Original Series
    """
    tosPerformer: Boolean

    """
    Whether it should be a video game performer
    """
    videoGamePerformer: Boolean

    """
    Whether it should be a voice performer
    """
    voicePerformer: Boolean

    """
    Whether it should be a performer that appeared in Star Trek: Voyager
    """
    voyPerformer: Boolean
  }

  input V2RestSpacecraftClassSearchInput {
    """
    Whether this spacecraft class should be from alternate reality
    """
    alternateReality: Boolean

    """
    Whether this spacecraft class should be from mirror universe
    """
    mirror: Boolean

    """
    Spacecraft class name
    """
    name: String

    """
    Whether it should be a warp-capable spacecraft class
    """
    warpCapableSpecies: Boolean
  }

  input V2RestSpacecraftSearchInput {
    """
    Spacecraft name
    """
    name: String

    """
    Spacecraft registry
    """
    registry: String

    """
    Spacecraft status
    """
    status: String
  }

  input V2RestSpeciesSearchInput {
    """
    Whether this species should be from alternate reality
    """
    alternateReality: Boolean

    """
    Whether it should be an avian species
    """
    avianSpecies: Boolean

    """
    Whether it should be an extinct species
    """
    extinctSpecies: Boolean

    """
    Whether it should be an extra-galactic species
    """
    extraGalacticSpecies: Boolean

    """
    Whether it should be a humanoid species
    """
    humanoidSpecies: Boolean

    """
    Species name
    """
    name: String

    """
    Whether it should be a non-corporeal species
    """
    nonCorporealSpecies: Boolean

    """
    Whether it should be a reptilian species
    """
    reptilianSpecies: Boolean

    """
    Whether it should be a shapeshifting species
    """
    shapeshiftingSpecies: Boolean

    """
    Whether it should be a spaceborne species
    """
    spaceborneSpecies: Boolean

    """
    Whether it should be a telepathic species
    """
    telepathicSpecies: Boolean

    """
    Whether it should be a trans-dimensional species
    """
    transDimensionalSpecies: Boolean

    """
    Whether it should be a unnamed species
    """
    unnamedSpecies: Boolean

    """
    Whether it should be a warp-capable species
    """
    warpCapableSpecies: Boolean
  }

  input V2RestStaffSearchInput {
    """
    Whether this person should be from art department
    """
    artDepartment: Boolean

    """
    Whether this person should be an art director
    """
    artDirector: Boolean

    """
    Whether this person should be an assistant or second unit director director
    """
    assistantOrSecondUnitDirector: Boolean

    """
    Whether this person should be an audio author
    """
    audioAuthor: Boolean

    """
    Whether this person should be an author
    """
    author: Boolean

    """
    Staff birth name
    """
    birthName: String

    """
    Whether this person should be a calendar artist
    """
    calendarArtist: Boolean

    """
    Whether this person should be from camera and electrical department
    """
    cameraAndElectricalDepartment: Boolean

    """
    Whether this person should be from casting department
    """
    castingDepartment: Boolean

    """
    Whether this person should be a part of CBS digital staff
    """
    cbsDigitalStaff: Boolean

    """
    Whether this person should be a cinematographer
    """
    cinematographer: Boolean

    """
    Whether this person should be a comic artist
    """
    comicArtist: Boolean

    """
    Whether this person should be a comic author
    """
    comicAuthor: Boolean

    """
    Whether this person should be a comic color artist
    """
    comicColorArtist: Boolean

    """
    Whether this person should be a comic cover artist
    """
    comicCoverArtist: Boolean

    """
    Whether this person should be a comic ink artist
    """
    comicInkArtist: Boolean

    """
    Whether this person should be a comic interior artist
    """
    comicInteriorArtist: Boolean

    """
    Whether this person should be a comic letter artist
    """
    comicLetterArtist: Boolean

    """
    Whether this person should be a comic pencil artist
    """
    comicPencilArtist: Boolean

    """
    Whether this person should be a comic strip artist
    """
    comicStripArtist: Boolean

    """
    Whether this person should be a composer
    """
    composer: Boolean

    """
    Whether this person should be from costume department
    """
    costumeDepartment: Boolean

    """
    Whether this person should be a custume designer
    """
    costumeDesigner: Boolean

    """
    Minimal date the staff was born
    """
    dateOfBirthFrom: String

    """
    Maximal date the staff was born
    """
    dateOfBirthTo: String

    """
    Minimal date the staff died
    """
    dateOfDeathFrom: String

    """
    Maximal date the staff died
    """
    dateOfDeathTo: String

    """
    Whether this person should be a director
    """
    director: Boolean

    """
    Whether this person should be an exhibit and attraction staff
    """
    exhibitAndAttractionStaff: Boolean

    """
    Whether this person should be a film editor
    """
    filmEditor: Boolean

    """
    Whether this person should be a part of Filmation production staff
    """
    filmationProductionStaff: Boolean

    """
    Whether this person should be a game artist
    """
    gameArtist: Boolean

    """
    Whether this person should be a game author
    """
    gameAuthor: Boolean

    """
    Staff gender
    """
    gender: String

    """
    Whether this person should be a part of ILM production staff
    """
    ilmProductionStaff: Boolean

    """
    Whether this person should be a linguist
    """
    linguist: Boolean

    """
    Whether this person should be a location staff
    """
    locationStaff: Boolean

    """
    Whether this person should be a make-up staff
    """
    makeupStaff: Boolean

    """
    Whether this person should be a merchandise staff
    """
    merchandiseStaff: Boolean

    """
    Whether this person should be from music department
    """
    musicDepartment: Boolean

    """
    Staff name
    """
    name: String

    """
    Whether this person should be a novel artist
    """
    novelArtist: Boolean

    """
    Whether this person should be a novel author
    """
    novelAuthor: Boolean

    """
    Whether this person should be a personal assistant
    """
    personalAssistant: Boolean

    """
    Place the staff was born
    """
    placeOfBirth: String

    """
    Place the staff died
    """
    placeOfDeath: String

    """
    Whether this person should be a producer
    """
    producer: Boolean

    """
    Whether this person should be a production associate
    """
    productionAssociate: Boolean

    """
    Whether this person should be a production designer
    """
    productionDesigner: Boolean

    """
    Whether this person should be a production staff
    """
    productionStaff: Boolean

    """
    Whether this person should be a publication artist
    """
    publicationArtist: Boolean

    """
    Whether this person should be a publication designer
    """
    publicationDesigner: Boolean

    """
    Whether this person should be a publication editor
    """
    publicationEditor: Boolean

    """
    Whether this person should be a publication staff
    """
    publicationStaff: Boolean

    """
    Whether this person should be a publicity artist
    """
    publicityArtist: Boolean

    """
    Whether this person should be a reference artist
    """
    referenceArtist: Boolean

    """
    Whether this person should be a reference author
    """
    referenceAuthor: Boolean

    """
    Whether this person should be a science consultant
    """
    scienceConsultant: Boolean

    """
    Whether this person should be from sound department
    """
    soundDepartment: Boolean

    """
    Whether this person should be a special and visual effects staff
    """
    specialAndVisualEffectsStaff: Boolean

    """
    Whether this person should be a special features artist
    """
    specialFeaturesStaff: Boolean

    """
    Whether this person should be a story editor
    """
    storyEditor: Boolean

    """
    Whether this person should be a studio executive
    """
    studioExecutive: Boolean

    """
    Whether this person should be from stunt department
    """
    stuntDepartment: Boolean

    """
    Whether this person should be from transportation department
    """
    transportationDepartment: Boolean

    """
    Whether this person is video game production staff
    """
    videoGameProductionStaff: Boolean

    """
    Whether this person should be a writer
    """
    writer: Boolean
  }

  input V2RestTechnologySearchInput {
    """
    Whether it's an artificial lifeform component
    """
    artificialLifeformComponent: Boolean

    """
    Whether it should be a Borg component
    """
    borgComponent: Boolean

    """
    Whether it should be a Borg technology
    """
    borgTechnology: Boolean

    """
    Whether it should be a communications technology
    """
    communicationsTechnology: Boolean

    """
    Whether it should be a technology related to computer programming
    """
    computerProgramming: Boolean

    """
    Whether it should be a computer technology
    """
    computerTechnology: Boolean

    """
    Whether it should be a culinary tool
    """
    culinaryTool: Boolean

    """
    Whether it should be a database
    """
    database: Boolean

    """
    Whether it should be a energy technology
    """
    energyTechnology: Boolean

    """
    Whether it should be a engineering tool
    """
    engineeringTool: Boolean

    """
    Whether it should be a fictional technology
    """
    fictionalTechnology: Boolean

    """
    Whether it should be a holographic technology
    """
    holographicTechnology: Boolean

    """
    Whether it should be a household tool
    """
    householdTool: Boolean

    """
    Whether it should be a identification technology
    """
    identificationTechnology: Boolean

    """
    Whether it should be a life support technology
    """
    lifeSupportTechnology: Boolean

    """
    Whether it should be a medical equipment
    """
    medicalEquipment: Boolean

    """
    Whether it should be a military technology
    """
    militaryTechnology: Boolean

    """
    Technology name
    """
    name: String

    """
    Whether it should be a propulsion technology
    """
    propulsionTechnology: Boolean

    """
    Whether it should be a security technology
    """
    securityTechnology: Boolean

    """
    Whether it should be a sensor technology
    """
    sensorTechnology: Boolean

    """
    Whether it should be a shield technology
    """
    shieldTechnology: Boolean

    """
    Whether it should be a spacecraft component
    """
    spacecraftComponent: Boolean

    """
    Whether it should be a subroutine
    """
    subroutine: Boolean

    """
    Whether it should be a time travel technology
    """
    timeTravelTechnology: Boolean

    """
    Whether it should be a tool
    """
    tool: Boolean

    """
    Whether it's a transportation technology
    """
    transportationTechnology: Boolean

    """
    Whether it's a transporter technology
    """
    transporterTechnology: Boolean

    """
    Whether it should be a transwarp technology
    """
    transwarpTechnology: Boolean

    """
    Whether it should be a victual technology
    """
    victualTechnology: Boolean

    """
    Whether it should be a warp technology
    """
    warpTechnology: Boolean

    """
    Whether it's a weapon component
    """
    weaponComponent: Boolean
  }

  input V2RestTitleSearchInput {
    """
    Whether it should be a education title
    """
    educationTitle: Boolean

    """
    Whether it should be a fleet rank
    """
    fleetRank: Boolean

    """
    Whether it should be a military rank
    """
    militaryRank: Boolean

    """
    Whether this title should be from mirror universe
    """
    mirror: Boolean

    """
    Title name
    """
    name: String

    """
    Whether it should be a religious title
    """
    religiousTitle: Boolean
  }

  """
  Response object for video releases search (V2)
  """
  type VideoReleaseV2BaseResponse {
    """
    Object describing response page
    """
    page: ResponsePage

    """
    Response sort
    """
    sort: ResponseSort

    """
    List of video releases matching given criteria
    """
    videoReleases: [VideoReleaseV2Base]
  }

  """
  Base video release, returned in search results (V2)
  """
  type VideoReleaseV2Base {
    """
    Whether this video has been release on Amazon.com
    """
    amazonDigitalRelease: Boolean

    """
    Whether this video has been release on Dailymotion
    """
    dailymotionDigitalRelease: Boolean

    """
    Whether this is a documentary
    """
    documentary: Boolean

    """
    Video release format
    """
    format: VideoReleaseFormat

    """
    Whether this video has been release on Google Play
    """
    googlePlayDigitalRelease: Boolean

    """
    Whether this video has been release on iTunes
    """
    itunesDigitalRelease: Boolean

    """
    Whether this video has been release on Netflix
    """
    netflixDigitalRelease: Boolean

    """
    Number of data carriers (like DVD, VCD, VHS etc.)
    """
    numberOfDataCarriers: Int

    """
    Number of episodes
    """
    numberOfEpisodes: Int

    """
    Number of feature-length episodes
    """
    numberOfFeatureLengthEpisodes: Int

    """
    Region 1/A release date
    """
    region1AReleaseDate: String

    """
    Region 1 slimline release date
    """
    region1SlimlineReleaseDate: String

    """
    Region 2/B release date
    """
    region2BReleaseDate: String

    """
    Region 2 slimline release date
    """
    region2SlimlineReleaseDate: String

    """
    Region 4 release date
    """
    region4AReleaseDate: String

    """
    Region 4 slimline release date
    """
    region4SlimlineReleaseDate: String

    """
    Region free release date
    """
    regionFreeReleaseDate: String

    """
    Run time, in minutes
    """
    runTime: Int

    """
    Whether this contains special features
    """
    specialFeatures: Boolean

    """
    Video release title
    """
    title: String!

    """
    Video release unique ID
    """
    uid: String!

    """
    Whether this video has been release on UltraViolet
    """
    ultraVioletDigitalRelease: Boolean

    """
    Whether this video has been release on Vimeo
    """
    vimeoDigitalRelease: Boolean

    """
    Whether this video has been release on VUDU
    """
    vuduDigitalRelease: Boolean

    """
    Whether this video has been release on Xbox SmartGlass
    """
    xboxSmartGlassDigitalRelease: Boolean

    """
    Starting year of video release story
    """
    yearFrom: Int

    """
    Ending year of video release story
    """
    yearTo: Int

    """
    Whether this video has been release on YouTube
    """
    youTubeDigitalRelease: Boolean
  }

  input V2RestVideoReleaseSearchInput {
    """
    Whether it should be a documentary
    """
    documentary: Boolean

    """
    Minimal run time, in minutes
    """
    runTimeFrom: Int

    """
    Minimal run time, in minutes
    """
    runTimeTo: Int

    """
    Whether it should contain special features
    """
    specialFeatures: Boolean

    """
    Video release title
    """
    title: String

    """
    Starting year of video release story
    """
    yearFrom: Int

    """
    Ending year of video release story
    """
    yearTo: Int
  }

  input V2RestWeaponSearchInput {
    """
    Whether this weapon should be from alternate reality
    """
    alternateReality: Boolean

    """
    Whether it should be a directed energy weapon
    """
    directedEnergyWeapon: Boolean

    """
    Whether it should be an explosive weapon
    """
    explosiveWeapon: Boolean

    """
    Whether it should be a fictional weapon
    """
    fictionalWeapon: Boolean

    """
    Whether it should be a hand-help weapon
    """
    handHeldWeapon: Boolean

    """
    Whether it should be a laser technology
    """
    laserTechnology: Boolean

    """
    Whether this weapon should be from mirror universe
    """
    mirror: Boolean

    """
    Weapon name
    """
    name: String

    """
    Whether it should be a phaser technology
    """
    phaserTechnology: Boolean

    """
    Whether it should be a photonic technology
    """
    photonicTechnology: Boolean

    """
    Whether it should be a plasma technology
    """
    plasmaTechnology: Boolean

    """
    Whether it should be a projectile weapon
    """
    projectileWeapon: Boolean
  }
`
