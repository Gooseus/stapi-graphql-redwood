// Search Input Types
export type V1RestAnimalSearchInput = {
  avian: boolean
  canine: boolean
  earthAnimal: boolean
  earthInsect: boolean
  feline: boolean
  name: string
}

export type V1RestAstronomicalObjectSearchInput = {
  name: string
  locationUid: string
  astronomicalObjectType: string
}

export type V1RestBookCollectionSearchInput = {
  numberOfPagesFrom: number
  numberOfPagesTo: number
  publishedYearFrom: number
  publishedYearTo: number
  stardateFrom: number
  stardateTo: number
  title: string
  yearFrom: number
  yearTo: number
}

export type V1RestBookSearchInput = {
  anthology: boolean
  audiobook: boolean
  audiobookAbridged: boolean
  audiobookPublishedYearFrom: number
  audiobookPublishedYearTo: number
  audiobookRunTimeFrom: number
  audiobookRunTimeTo: number
  biographyBook: boolean
  eBook: boolean
  novel: boolean
  novelization: boolean
  numberOfPagesFrom: number
  numberOfPagesTo: number
  publishedYearFrom: number
  publishedYearTo: number
  referenceBook: boolean
  rolePlayingBook: boolean
  stardateFrom: number
  stardateTo: number
  title: string
  yearFrom: number
  yearTo: number
}

export type V1RestCharacterSearchInput = {
  alternateReality: boolean
  deceased: boolean
  fictionalCharacter: boolean
  gender: string
  hologram: boolean
  mirror: boolean
  name: string
}

export type V1RestComicCollectionSearchInput = {
  numberOfPagesFrom: number
  numberOfPagesTo: number
  photonovel: boolean
  publishedYearFrom: number
  publishedYearTo: number
  stardateFrom: number
  stardateTo: number
  title: string
  yearFrom: number
  yearTo: number
}

export type V1RestComicSeriesSearchInput = {
  miniseries: boolean
  numberOfIssuesFrom: number
  numberOfIssuesTo: number
  photonovelSeries: boolean
  publishedYearFrom: number
  publishedYearTo: number
  stardateFrom: number
  stardateTo: number
  title: string
  yearFrom: number
  yearTo: number
}

export type V1RestComicStripSearchInput = {
  numberOfPagesFrom: number
  numberOfPagesTo: number
  publishedYearFrom: number
  publishedYearTo: number
  title: string
  yearFrom: number
  yearTo: number
}

export type V1RestComicsSearchInput = {
  adaptation: boolean
  numberOfPagesFrom: number
  numberOfPagesTo: number
  photonovel: boolean
  publishedYearFrom: number
  publishedYearTo: number
  stardateFrom: number
  stardateTo: number
  title: string
  yearFrom: number
  yearTo: number
}

export type V1RestCompanySearchInput = {
  broadcaster: boolean
  collectibleCompany: boolean
  conglomerate: boolean
  digitalVisualEffectsCompany: boolean
  distributor: boolean
  filmEquipmentCompany: boolean
  gameCompany: boolean
  makeUpEffectsStudio: boolean
  mattePanumberingCompany: boolean
  modelAndMiniatureEffectsCompany: boolean
  name: string
  postProductionCompany: boolean
  productionCompany: boolean
  propCompany: boolean
  recordLabel: boolean
  specialEffectsCompany: boolean
  tvAndFilmProductionCompany: boolean
  videoGameCompany: boolean
}

export type V1RestConflictSearchInput = {
  alternateReality: boolean
  dominionWarBattle: boolean
  earthConflict: boolean
  federationWar: boolean
  klingonWar: boolean
  name: string
  yearFrom: number
  yearTo: number
}

export type V1RestElementSearchInput = {
  gammaSeries: boolean
  hypersonicSeries: boolean
  megaSeries: boolean
  name: string
  omegaSeries: boolean
  symbol: string
  transonicSeries: boolean
  transuranium: boolean
  worldSeries: boolean
}

export type V1RestEpisodeSearchInput = {
  episodeNumberFrom: number
  episodeNumberTo: number
  featureLength: boolean
  finalScriptDateFrom: string
  finalScriptDateTo: string
  productionSerialNumber: string
  seasonNumberFrom: number
  seasonNumberTo: number
  stardateFrom: number
  stardateTo: number
  title: string
  usAirDateFrom: string
  usAirDateTo: string
  yearFrom: number
  yearTo: number
}

export type V1RestFoodSearchInput = {
  alcoholicBeverage: boolean
  beverage: boolean
  dessert: boolean
  earthlyOrigin: boolean
  fruit: boolean
  herbOrSpice: boolean
  juice: boolean
  name: string
  sauce: boolean
  soup: boolean
  tea: boolean
}

export type V1RestLiteratureSearchInput = {
  earthlyOrigin: boolean
  religiousLiterature: boolean
  report: boolean
  scientificLiterature: boolean
  shakespeareanWork: boolean
  technicalManual: boolean
  title: string
}

export type V1RestLocationSearchInput = {
  alternateReality: boolean
  bajoranSettlement: boolean
  bodyOfWater: boolean
  buildingnumbererior: boolean
  colony: boolean
  country: boolean
  ds9Establishment: boolean
  earthlyLocation: boolean
  establishment: boolean
  fictionalLocation: boolean
  geographicalLocation: boolean
  landform: boolean
  landmark: boolean
  medicalEstablishment: boolean
  mirror: boolean
  name: string
  religiousLocation: boolean
  road: boolean
  school: boolean
  settlement: boolean
  shipyard: boolean
  structure: boolean
  subnationalEntity: boolean
  usSettlement: boolean
}

export type V1RestMagazineSeriesSearchInput = {
  numberOfIssuesFrom: number
  numberOfIssuesTo: number
  publishedYearFrom: number
  publishedYearTo: number
  title: string
}

export type V1RestMagazineSearchInput = {
  numberOfPagesFrom: number
  numberOfPagesTo: number
  publishedYearFrom: number
  publishedYearTo: number
  title: string
}

export type V1RestMaterialSearchInput = {
  alloyOrComposite: boolean
  biochemicalCompound: boolean
  chemicalCompound: boolean
  drug: boolean
  explosive: boolean
  fuel: boolean
  gemstone: boolean
  mineral: boolean
  name: string
  poisonousSubstance: boolean
  preciousMaterial: boolean
}

export type V1RestMedicalConditionSearchInput = {
  name: string
  psychologicalCondition: boolean
}

export type V1RestMovieSearchInput = {
  stardateFrom: number
  stardateTo: number
  title: string
  usReleaseDateFrom: string
  usReleaseDateTo: string
  yearFrom: number
  yearTo: number
}

export type V1RestOccupationSearchInput = {
  legalOccupation: boolean
  medicalOccupation: boolean
  name: string
  scientificOccupation: boolean
}

export type V1RestOrganizationSearchInput = {
  alternateReality: boolean
  government: boolean
  governmentAgency: boolean
  numberergovernmentalOrganization: boolean
  lawEnforcementAgency: boolean
  medicalOrganization: boolean
  militaryOrganization: boolean
  militaryUnit: boolean
  mirror: boolean
  name: string
  prisonOrPenalColony: boolean
  researchOrganization: boolean
  sportOrganization: boolean
}

export type V1RestPerformerSearchInput = {
  animalPerformer: boolean
  birthName: string
  dateOfBirthFrom: string
  dateOfBirthTo: string
  dateOfDeathFrom: string
  dateOfDeathTo: string
  disPerformer: boolean
  ds9Performer: boolean
  entPerformer: boolean
  filmPerformer: boolean
  gender: string
  name: string
  placeOfBirth: string
  placeOfDeath: string
  standInPerformer: boolean
  stuntPerformer: boolean
  tasPerformer: boolean
  tngPerformer: boolean
  tosPerformer: boolean
  videoGamePerformer: boolean
  voicePerformer: boolean
  voyPerformer: boolean
}

export type V1RestSeasonSearchInput = {
  numberOfEpisodesFrom: number
  numberOfEpisodesTo: number
  seasonNumberFrom: number
  seasonNumberTo: number
  title: string
}

export type V1RestSeriesSearchInput = {
  abbreviation: string
  originalRunEndDateFrom: string
  originalRunEndDateTo: string
  originalRunStartDateFrom: string
  originalRunStartDateTo: string
  productionEndYearFrom: number
  productionEndYearTo: number
  productionStartYearFrom: number
  productionStartYearTo: number
  title: string
}

export type V1RestSoundtrackSearchInput = {
  lengthTo: number
  releaseDateFrom: string
  releaseDateTo: string
  title: string
}

export type V1RestSpacecraftClassSearchInput = {
  alternateReality: boolean
  name: string
  warpCapableSpecies: boolean
}

export type V1RestSpacecraftSearchInput = {
  name: string
}

export type V1RestSpeciesSearchInput = {
  alternateReality: boolean
  extinctSpecies: boolean
  extraGalacticSpecies: boolean
  humanoidSpecies: boolean
  name: string
  nonCorporealSpecies: boolean
  reptilianSpecies: boolean
  shapeshiftingSpecies: boolean
  spaceborneSpecies: boolean
  telepathicSpecies: boolean
  transDimensionalSpecies: boolean
  unnamedSpecies: boolean
  warpCapableSpecies: boolean
}

export type V1RestStaffSearchInput = {
  artDepartment: boolean
  artDirector: boolean
  assistantOrSecondUnitDirector: boolean
  audioAuthor: boolean
  author: boolean
  birthName: string
  calendarArtist: boolean
  cameraAndElectricalDepartment: boolean
  castingDepartment: boolean
  cbsDigitalStaff: boolean
  cinematographer: boolean
  comicArtist: boolean
  comicAuthor: boolean
  comicColorArtist: boolean
  comicInkArtist: boolean
  comicnumbereriorArtist: boolean
  comicLetterArtist: boolean
  comicPencilArtist: boolean
  comicStripArtist: boolean
  composer: boolean
  costumeDepartment: boolean
  costumeDesigner: boolean
  dateOfBirthFrom: string
  dateOfBirthTo: string
  dateOfDeathFrom: string
  dateOfDeathTo: string
  director: boolean
  exhibitAndAttractionStaff: boolean
  filmEditor: boolean
  gameArtist: boolean
  gameAuthor: boolean
  gender: string
  ilmProductionStaff: boolean
  linguist: boolean
  locationStaff: boolean
  makeupStaff: boolean
  musicDepartment: boolean
  name: string
  novelArtist: boolean
  novelAuthor: boolean
  personalAssistant: boolean
  placeOfBirth: string
  placeOfDeath: string
  producer: boolean
  productionAssociate: boolean
  productionDesigner: boolean
  productionStaff: boolean
  publicationArtist: boolean
  publicationDesigner: boolean
  publicationEditor: boolean
  publicationStaff: boolean
  publicityArtist: boolean
  referenceArtist: boolean
  referenceAuthor: boolean
  scienceConsultant: boolean
  soundDepartment: boolean
  specialAndVisualEffectsStaff: boolean
  specialFeaturesStaff: boolean
  storyEditor: boolean
  studioExecutive: boolean
  stuntDepartment: boolean
  transportationDepartment: boolean
  videoGameProductionStaff: boolean
  writer: boolean
}

export type V1RestTechnologySearchInput = {
  borgComponent: boolean
  borgTechnology: boolean
  communicationsTechnology: boolean
  computerProgramming: boolean
  computerTechnology: boolean
  culinaryTool: boolean
  database: boolean
  energyTechnology: boolean
  engineeringTool: boolean
  fictionalTechnology: boolean
  holographicTechnology: boolean
  householdTool: boolean
  identificationTechnology: boolean
  lifeSupportTechnology: boolean
  medicalEquipment: boolean
  name: string
  sensorTechnology: boolean
  shieldTechnology: boolean
  subroutine: boolean
  tool: boolean
  transporterTechnology: boolean
}

export type V1RestTitleSearchInput = {
  fleetRank: boolean
  militaryRank: boolean
  mirror: boolean
  name: string
  position: boolean
  religiousTitle: boolean
}

export type V1RestTradingCardDeckSearchInput = {
  name: string
  tradingCardSetUid: string
}

export type V1RestTradingCardSetSearchInput = {
  boxesPerCaseFrom: number
  boxesPerCaseTo: number
  cardWidthTo: number
  cardsPerPackFrom: number
  cardsPerPackTo: number
  name: string
  packsPerBoxFrom: number
  packsPerBoxTo: number
  productionRunFrom: number
  productionRunTo: number
  productionRunUnit: string
  releaseYearFrom: number
  releaseYearTo: number
}

export type V1RestTradingCardSearchInput = {
  name: string
  tradingCardDeckUid: string
  tradingCardSetUid: string
}

export type V1RestVideoGameSearchInput = {
  releaseDateFrom: string
  releaseDateTo: string
  title: string
}

export type V1RestVideoReleaseSearchInput = {
  runTimeTo: number
  title: string
  yearFrom: number
  yearTo: number
}

export type V1RestWeaponSearchInput = {
  alternateReality: boolean
  handHeldWeapon: boolean
  laserTechnology: boolean
  mirror: boolean
  name: string
  phaserTechnology: boolean
  photonicTechnology: boolean
  plasmaTechnology: boolean
}

export type V2RestAstronomicalObjectSearchInput = {
  astronomicalObject
  type: string
  locationUid: string
  name: string
}

export type V2RestBookSearchInput = {
  anthology: boolean
  audiobook: boolean
  audiobookRunTimeTo: number
  biographyBook: boolean
  eBook: boolean
  novel: boolean
  novelization: boolean
  numberOfPagesFrom: number
  numberOfPagesTo: number
  publishedYearFrom: number
  publishedYearTo: number
  referenceBook: boolean
  rolePlayingBook: boolean
  stardateFrom: number
  stardateTo: number
  title: string
  unauthorizedPublication: boolean
  yearFrom: number
  yearTo: number
}

export type V2RestCompanySearchInput = {
  broadcaster: boolean
  collectibleCompany: boolean
  conglomerate: boolean
  digitalVisualEffectsCompany: boolean
  distributor: boolean
  filmEquipmentCompany: boolean
  gameCompany: boolean
  makeUpEffectsStudio: boolean
  mattePanumberingCompany: boolean
  modelAndMiniatureEffectsCompany: boolean
  name: string
  postProductionCompany: boolean
  productionCompany: boolean
  propCompany: boolean
  publicationArtStudio: boolean
  publisher: boolean
  recordLabel: boolean
  specialEffectsCompany: boolean
  streamingService: boolean
  tvAndFilmProductionCompany: boolean
  videoGameCompany: boolean
  visualEffectsCompany: boolean
}

export type V2RestElementSearchInput = {
  gammaSeries: boolean
  hypersonicSeries: boolean
  megaSeries: boolean
  name: string
  omegaSeries: boolean
  symbol: string
  transonicSeries: boolean
  transuranic: boolean
  worldSeries: boolean
}

export type V2RestLocationSearchInput = {
  alternateReality: boolean
  bajoranSettlement: boolean
  bodyOfWater: boolean
  buildingnumbererior: boolean
  colony: boolean
  country: boolean
  ds9Establishment: boolean
  earthlyLocation: boolean
  establishment: boolean
  fictionalLocation: boolean
  geographicalLocation: boolean
  landform: boolean
  medicalEstablishment: boolean
  mirror: boolean
  mythologicalLocation: boolean
  name: string
  qonosLocation: boolean
  religiousLocation: boolean
  residence: boolean
  restaurant: boolean
  road: boolean
  school: boolean
  settlement: boolean
  shipyard: boolean
  structure: boolean
  subnationalEntity: boolean
  usSettlement: boolean
}

export type V2RestOccupationSearchInput = {
  artsOccupation: boolean
  communicationOccupation: boolean
  economicOccupation: boolean
  educationOccupation: boolean
  entertainmentOccupation: boolean
  illegalOccupation: boolean
  legalOccupation: boolean
  medicalOccupation: boolean
  name: string
  scientificOccupation: boolean
  sportsOccupation: boolean
  victualOccupation: boolean
}

export type V2RestPerformerSearchInput = {
  animalPerformer: boolean
  audiobookPerformer: boolean
  birthName: string
  cutPerformer: boolean
  dateOfBirthFrom: string
  dateOfBirthTo: string
  dateOfDeathFrom: string
  dateOfDeathTo: string
  disPerformer: boolean
  ds9Performer: boolean
  entPerformer: boolean
  filmPerformer: boolean
  gender: string
  ldPerformer: boolean
  name: string
  picPerformer: boolean
  placeOfBirth: string
  placeOfDeath: string
  proPerformer: boolean
  puppeteer: boolean
  snwPerformer: boolean
  stPerformer: boolean
  standInPerformer: boolean
  stuntPerformer: boolean
  tasPerformer: boolean
  tngPerformer: boolean
  tosPerformer: boolean
  videoGamePerformer: boolean
  voicePerformer: boolean
  voyPerformer: boolean
}

export type V2RestSpacecraftClassSearchInput = {
  alternateReality: boolean
  mirror: boolean
  name: string
  warpCapableSpecies: boolean
}

export type V2RestSpacecraftSearchInput = {
  name: string
  registry: string
  status: string
}

export type V2RestSpeciesSearchInput = {
  alternateReality: boolean
  avianSpecies: boolean
  extinctSpecies: boolean
  extraGalacticSpecies: boolean
  humanoidSpecies: boolean
  name: string
  nonCorporealSpecies: boolean
  reptilianSpecies: boolean
  shapeshiftingSpecies: boolean
  spaceborneSpecies: boolean
  telepathicSpecies: boolean
  transDimensionalSpecies: boolean
  unnamedSpecies: boolean
  warpCapableSpecies: boolean
}

export type V2RestStaffSearchInput = {
  artDepartment: boolean
  artDirector: boolean
  assistantOrSecondUnitDirector: boolean
  audioAuthor: boolean
  author: boolean
  birthName: string
  calendarArtist: boolean
  cameraAndElectricalDepartment: boolean
  castingDepartment: boolean
  cbsDigitalStaff: boolean
  cinematographer: boolean
  comicArtist: boolean
  comicAuthor: boolean
  comicColorArtist: boolean
  comicCoverArtist: boolean
  comicInkArtist: boolean
  comicnumbereriorArtist: boolean
  comicLetterArtist: boolean
  comicPencilArtist: boolean
  comicStripArtist: boolean
  composer: boolean
  costumeDepartment: boolean
  costumeDesigner: boolean
  dateOfBirthFrom: string
  dateOfBirthTo: string
  dateOfDeathFrom: string
  dateOfDeathTo: string
  director: boolean
  exhibitAndAttractionStaff: boolean
  filmEditor: boolean
  filmationProductionStaff: boolean
  gameArtist: boolean
  gameAuthor: boolean
  gender: string
  ilmProductionStaff: boolean
  linguist: boolean
  locationStaff: boolean
  makeupStaff: boolean
  merchandiseStaff: boolean
  musicDepartment: boolean
  name: string
  novelArtist: boolean
  novelAuthor: boolean
  personalAssistant: boolean
  placeOfBirth: string
  placeOfDeath: string
  producer: boolean
  productionAssociate: boolean
  productionDesigner: boolean
  productionStaff: boolean
  publicationArtist: boolean
  publicationDesigner: boolean
  publicationEditor: boolean
  publicationStaff: boolean
  publicityArtist: boolean
  referenceArtist: boolean
  referenceAuthor: boolean
  scienceConsultant: boolean
  soundDepartment: boolean
  specialAndVisualEffectsStaff: boolean
  specialFeaturesStaff: boolean
  storyEditor: boolean
  studioExecutive: boolean
  stuntDepartment: boolean
  transportationDepartment: boolean
  videoGameProductionStaff: boolean
  writer: boolean
}

export type V2RestTechnologySearchInput = {
  weaponComponent: boolean
}

export type V2RestTitleSearchInput = {
  educationTitle: boolean
  fleetRank: boolean
  militaryRank: boolean
  mirror: boolean
  name: string
  religiousTitle: boolean
}

export type VideoReleaseV2Base = {
  runTime: number
  specialFeatures: boolean
  title: string
  uid: string
  ultraVioletDigitalRelease: boolean
  vimeoDigitalRelease: boolean
  vuduDigitalRelease: boolean
  xboxSmartGlassDigitalRelease: boolean
  yearFrom: number
  yearTo: number
  youTubeDigitalRelease: boolean
}

export type V2RestVideoReleaseSearchInput = {
  documentary: boolean
  runTimeTo: number
  specialFeatures: boolean
  title: string
  yearFrom: number
  yearTo: number
}

export type V2RestWeaponSearchInput = {
  alternateReality: boolean
  directedEnergyWeapon: boolean
  explosiveWeapon: boolean
  fictionalWeapon: boolean
  handHeldWeapon: boolean
  laserTechnology: boolean
  mirror: boolean
  name: string
  phaserTechnology: boolean
  photonicTechnology: boolean
  plasmaTechnology: boolean
  projectileWeapon: boolean
}

export type GetBaseResponseParams = {
  pageSize: number
  pageNumber: number
}

export type GetFullResponseParams = {
  uid: string
}

export type GetRequestParams =
  | GetBaseResponseParams
  | GetFullResponseParams
  | object

export type SearchInput =
  | V1RestAnimalSearchInput
  | V1RestAstronomicalObjectSearchInput
  | V1RestBookCollectionSearchInput
  | V1RestBookSearchInput
  | V1RestCharacterSearchInput
  | V1RestComicCollectionSearchInput
  | V1RestComicSeriesSearchInput
  | V1RestComicStripSearchInput
  | V1RestComicsSearchInput
  | V1RestCompanySearchInput
  | V1RestConflictSearchInput
  | V1RestElementSearchInput
  | V1RestEpisodeSearchInput
  | V1RestFoodSearchInput
  | V1RestLiteratureSearchInput
  | V1RestLocationSearchInput
  | V1RestMagazineSeriesSearchInput
  | V1RestMagazineSearchInput
  | V1RestMaterialSearchInput
  | V1RestMedicalConditionSearchInput
  | V1RestMovieSearchInput
  | V1RestOccupationSearchInput
  | V1RestOrganizationSearchInput
  | V1RestPerformerSearchInput
  | V1RestSeasonSearchInput
  | V1RestSeriesSearchInput
  | V1RestSoundtrackSearchInput
  | V1RestSpacecraftClassSearchInput
  | V1RestSpacecraftSearchInput
  | V1RestSpeciesSearchInput
  | V1RestStaffSearchInput
  | V1RestTechnologySearchInput
  | V1RestTitleSearchInput
  | V1RestTradingCardDeckSearchInput
  | V1RestTradingCardSetSearchInput
  | V1RestTradingCardSearchInput
  | V1RestVideoGameSearchInput
  | V1RestVideoReleaseSearchInput
  | V1RestWeaponSearchInput
  | V2RestAstronomicalObjectSearchInput
  | V2RestBookSearchInput
  | V2RestCompanySearchInput
  | V2RestElementSearchInput
  | V2RestLocationSearchInput
  | V2RestOccupationSearchInput
  | V2RestPerformerSearchInput
  | V2RestSpacecraftClassSearchInput
  | V2RestSpacecraftSearchInput
  | V2RestSpeciesSearchInput
  | V2RestStaffSearchInput
  | V2RestTechnologySearchInput
  | V2RestTitleSearchInput
  | VideoReleaseV2Base
  | V2RestVideoReleaseSearchInput
  | V2RestWeaponSearchInput

const VERSIONS = {
  V1: 'v1',
  V2: 'v2',
  V3: 'v3',
} as const

const RESOURCES = {
  Animal: 'animal',
  AnimalSearch: 'animal/search',
  AstronomicalObject: 'astronomicalObject',
  AstronomicalObjectSearch: 'astronomicalObject/search',
  Book: 'book',
  BookSearch: 'book/search',
  BookCollection: 'bookCollection',
  BookCollectionSearch: 'bookCollection/search',
  BookSeries: 'bookSeries',
  BookSeriesSearch: 'bookSeries/search',
  Character: 'character',
  CharacterSearch: 'character/search',
  ComicCollection: 'comicCollection',
  ComicCollectionSearch: 'comicCollection/search',
  ComicSeries: 'comicSeries',
  ComicSeriesSearch: 'comicSeries/search',
  ComicStrip: 'comicStrip',
  ComicStripSearch: 'comicStrip/search',
  Comics: 'comics',
  ComicsSearch: 'comics/search',
  Company: 'company',
  CompanySearch: 'company/search',
  Conflict: 'conflict',
  ConflictSearch: 'conflict/search',
  Element: 'element',
  ElementSearch: 'element/search',
  Episode: 'episode',
  EpisodeSearch: 'episode/search',
  Food: 'food',
  FoodSearch: 'food/search',
  Literature: 'literature',
  LiteratureSearch: 'literature/search',
  Location: 'location',
  LocationSearch: 'location/search',
  Magazine: 'magazine',
  MagazineSearch: 'magazine/search',
  MagazineSeries: 'magazineSeries',
  MagazineSeriesSearch: 'magazineSeries/search',
  Material: 'material',
  MaterialSearch: 'material/search',
  MedicalCondition: 'medicalCondition',
  MedicalConditionSearch: 'medicalCondition/search',
  Movie: 'movie',
  MovieSearch: 'movie/search',
  Occupation: 'occupation',
  OccupationSearch: 'occupation/search',
  Organization: 'organization',
  OrganizationSearch: 'organization/search',
  Performer: 'performer',
  PerformerSearch: 'performer/search',
  Season: 'season',
  SeasonSearch: 'season/search',
  Series: 'series',
  SeriesSearch: 'series/search',
  Soundtrack: 'soundtrack',
  SoundtrackSearch: 'soundtrack/search',
  Spacecraft: 'spacecraft',
  SpacecraftSearch: 'spacecraft/search',
  SpacecraftClass: 'spacecraftClass',
  SpacecraftClassSearch: 'spacecraftClass/search',
  Species: 'species',
  SpeciesSearch: 'species/search',
  Staff: 'staff',
  StaffSearch: 'staff/search',
  Technology: 'technology',
  TechnologySearch: 'technology/search',
  Title: 'title',
  TitleSearch: 'title/search',
  TradingCardDeck: 'tradingCardDeck',
  TradingCardDeckSearch: 'tradingCardDeck/search',
  TradingCard: 'tradingCard',
  TradingCardSearch: 'tradingCard/search',
  TradingCardSet: 'tradingCardSet',
  TradingCardSetSearch: 'tradingCardSet/search',
  VideoGame: 'videoGame',
  VideoGameSearch: 'videoGame/search',
  VideoRelease: 'videoRelease',
  VideoReleaseSearch: 'videoRelease/search',
  Weapon: 'weapon',
  WeaponSearch: 'weapon/search',
} as const

export type Version = (typeof VERSIONS)[keyof typeof VERSIONS]
export type Resource = (typeof RESOURCES)[keyof typeof RESOURCES]

export type PostSearchParams = {
  pageSize: number
  pageNumber: number
  sort?: string
  search?: SearchInput
}
export type PostParams = {
  pageSize: number
  pageNumber: number
  sort?: string
}
