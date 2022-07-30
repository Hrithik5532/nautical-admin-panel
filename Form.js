const mongoose = require('mongoose');
const { Schema } = mongoose;

const FormSchema = new Schema({
    //1) Profile Details
    //1A) Applied to office in City / Country
    present_rank: {
        // 
        type: String
    },
    rank_applied: {
        // 
        type: String
    },
    date_of_application: {
        // 
        type: String
    },
    date_of_availability: {
        // required : true,
        type: String
    },
    agency: {
        type: String
    },
    //1B) Profile Details
    first_name: {

        type: String
    },
    middle_name: {

        type: String
    },
    last_name: {

        type: String
    },
    date_of_birth: {

        type: String
    },
    place_of_birth: {

        type: String
    },
    nationality: {

        type: String
    },
    maritial_status: {

        type: String
    },
    smoker: {

        type: String
    },
    permanent_address: {

        type: String
    },
    present_address: {

        type: String
    },
    city_permanent: {

        type: String
    },
    pin_code_permanent: {

        type: String
    },
    city_present: {

        type: String
    },
    pin_code_present: {

        type: String
    },
    telephone_permanent: {

        type: String
    },
    email_permanent: {

        type: String
    },
    telephone_present: {

        type: String
    },
    email_present: {

        type: String
    },
    nearest_domestic_airport: {

        type: String
    },
    nearest_international_airport: {

        type: String
    },
    //2) NEXT OF KINS/ DEPENDENTS
    name_of_wife: {

        type: String
    },
    name_of_kin: {

        type: String
    },
    relation: {

        type: String
    },
    add_nkd: {

        type: String
    },
    no_of_child: {

        type: String
    },
    kin_array: {

        type: Array
    },
    //3)Passport Details
    passport_no: {

        type: String
    },
    passport_place_of_issue: {

        type: String
    },
    passport_date_of_issue: {

        type: String
    },
    passport_date_of_expiry: {

        type: String
    },
    us_visa_no: {

        type: String
    },
    us_visa_place_of_issue: {

        type: String
    },
    us_visa_date_of_issue: {

        type: String
    },
    us_visa_date_of_expiry: {

        type: String
    },
    yellow_fever_no: {

        type: String
    },
    yellow_fever_place_of_issue: {

        type: String
    },
    yellow_fever_date_of_issue: {

        type: String
    },
    yellow_fever_date_of_expiry: {

        type: String
    },
    //4)Continuous Discharge Certificate / Seaman Book
    indian_certificate_no: {

        type: String
    },
    indian_place_of_issue: {

        type: String
    },
    indian_date_of_issue: {

        type: String
    },
    indian_date_of_expiry: {

        type: String
    },
    panama_certificate_no: {

        type: String
    },
    panama_place_of_issue: {

        type: String
    },
    panama_date_of_issue: {

        type: String
    },
    panama_date_of_expiry: {

        type: String
    },
    others_certificate_no: {

        type: String
    },
    others_place_of_issue: {

        type: String
    },
    others_date_of_issue: {

        type: String
    },
    others_date_of_expiry: {

        type: String
    },
    //5)Academic Qualifications
    elementary_name_of_institution: {

        type: String
    },
    elementary_degree: {

        type: String
    },
    elementary_from: {

        type: String
    },
    elementary_to: {

        type: String
    },
    secondary_name_of_institution: {

        type: String
    },
    secondary_degree: {

        type: String
    },
    secondary_from: {

        type: String
    },
    secondary_to: {

        type: String
    },
    university_name_of_institution: {

        type: String
    },
    university_degree: {

        type: String
    },
    university_from: {

        type: String
    },
    university_to: {

        type: String
    },
    professional_name_of_institution: {

        type: String
    },
    professional_degree: {

        type: String
    },
    professional_from: {

        type: String
    },
    professional_to: {

        type: String
    },
    additional_skills: {

        type: String
    },
    //6) Liscence / Certificate of Competency
    indian_grade: {

        type: String
    },
    indian_number: {

        type: String
    },
    indian_liscence_date_of_issue: {

        type: String
    },
    indian_lisence_date_of_expiry: {

        type: String
    },
    indain_lisence_date_revalidation: {

        type: String
    },
    indian_stcw: {

        type: String
    },
    uk_grade: {

        type: String
    },
    uk_number: {

        type: String
    },
    uk_liscence_date_of_issue: {

        type: String
    },
    uk_lisence_date_of_expiry: {

        type: String
    },
    uk_lisence_date_revalidation: {

        type: String
    },
    uk_stcw: {

        type: String
    },
    aus_grade: {

        type: String
    },
    aus_number: {

        type: String
    },
    aus_liscence_date_of_issue: {

        type: String
    },
    aus_lisence_date_of_expiry: {

        type: String
    },
    aus_lisence_date_revalidation: {

        type: String
    },
    aus_stcw: {

        type: String
    },
    singapore_grade: {

        type: String
    },
    singapore_number: {

        type: String
    },
    singapore_liscence_date_of_issue: {

        type: String
    },
    singapore_lisence_date_of_expiry: {

        type: String
    },
    singapore_lisence_date_revalidation: {

        type: String
    },
    singapore_stcw: {

        type: String
    },
    panama_grade: {

        type: String
    },
    panama_number: {

        type: String
    },
    panama_liscence_date_of_issue: {

        type: String
    },
    panama_lisence_date_of_expiry: {

        type: String
    },
    panama_lisence_date_revalidation: {

        type: String
    },
    panama_stcw: {

        type: String
    },
    others_grade: {

        type: String
    },
    others_number: {

        type: String
    },
    others_liscence_date_of_issue: {

        type: String
    },
    others_lisence_date_of_expiry: {

        type: String
    },
    others_lisence_date_revalidation: {

        type: String
    },
    others_stcw: {

        type: String
    },
    //7)stcw and other certificates
    aff_cerificate_no: {
        type: String
    },
    aff_date_of_issue: {
        type: String
    },
    aff_date_of_expiry: {
        type: String
    },
    aff_place_of_issue: {
        type: String
    },
    aff_issuing_authority: {
        type: String
    },
    fpff_cerificate_no: {
        type: String
    },
    fpff_date_of_issue: {
        type: String
    },
    fpff_date_of_expiry: {
        type: String
    },
    fpff_place_of_issue: {
        type: String
    },
    fpff_issuing_authority: {
        type: String
    },
    efa_cerificate_no: {
        type: String
    },
    efa_date_of_issue: {
        type: String
    },
    efa_date_of_expiry: {
        type: String
    },
    efa_place_of_issue: {
        type: String
    },
    efa_issuing_authority: {
        type: String
    },
    mfa_cerificate_no: {
        type: String
    },
    mfa_date_of_issue: {
        type: String
    },
    mfa_date_of_expiry: {
        type: String
    },
    mfa_place_of_issue: {
        type: String
    },
    mfa_issuing_authority: {
        type: String
    },
    pst_cerificate_no: {
        type: String
    },
    pst_date_of_issue: {
        type: String
    },
    pst_date_of_expiry: {
        type: String
    },
    pst_place_of_issue: {
        type: String
    },
    pst_issuing_authority: {
        type: String
    },
    pscrb_cerificate_no: {
        type: String
    },
    pscrb_date_of_issue: {
        type: String
    },
    pscrb_date_of_expiry: {
        type: String
    },
    pscrb_place_of_issue: {
        type: String
    },
    pscrb_issuing_authority: {
        type: String
    },
    pssr_cerificate_no: {
        type: String
    },
    pssr_date_of_issue: {
        type: String
    },
    pssr_date_of_expiry: {
        type: String
    },
    pssr_place_of_issue: {
        type: String
    },
    pssr_issuing_authority: {
        type: String
    },
    sso_cerificate_no: {
        type: String
    },
    sso_date_of_issue: {
        type: String
    },
    sso_date_of_expiry: {
        type: String
    },
    sso_place_of_issue: {
        type: String
    },
    sso_issuing_authority: {
        type: String
    },
    stsdsd_cerificate_no: {
        type: String
    },
    stsdsd_date_of_issue: {
        type: String
    },
    stsdsd_date_of_expiry: {
        type: String
    },
    stsdsd_place_of_issue: {
        type: String
    },
    stsdsd_issuing_authority: {
        type: String
    },
    roc_cerificate_no: {
        type: String
    },
    roc_date_of_issue: {
        type: String
    },
    roc_date_of_expiry: {
        type: String
    },
    roc_place_of_issue: {
        type: String
    },
    roc_issuing_authority: {
        type: String
    },
    arpa_cerificate_no: {
        type: String
    },
    arpa_date_of_issue: {
        type: String
    },
    arpa_date_of_expiry: {
        type: String
    },
    arpa_place_of_issue: {
        type: String
    },
    arpa_issuing_authority: {
        type: String
    },
    gmdss_cerificate_no: {
        type: String
    },
    gmdss_date_of_issue: {
        type: String
    },
    gmdss_date_of_expiry: {
        type: String
    },
    gmdss_place_of_issue: {
        type: String
    },
    gmdss_issuing_authority: {
        type: String
    },
    gmdss_endorsement_cerificate_no: {
        type: String
    },
    gmdss_endorsement_date_of_issue: {
        type: String
    },
    gmdss_endorsement_date_of_expiry: {
        type: String
    },
    gmdss_endorsement_place_of_issue: {
        type: String
    },
    gmdss_endorsement_issuing_authority: {
        type: String
    },
    refresher_cerificate_no: {
        type: String
    },
    refresher_date_of_issue: {
        type: String
    },
    refresher_date_of_expiry: {
        type: String
    },
    refresher_place_of_issue: {
        type: String
    },
    refresher_issuing_authority: {
        type: String
    },
    ranso_cerificate_no: {
        type: String
    },
    ranso_date_of_issue: {
        type: String
    },
    ranso_date_of_expiry: {
        type: String
    },
    ranso_place_of_issue: {
        type: String
    },
    ranso_issuing_authority: {
        type: String
    },
    sms_cerificate_no: {
        type: String
    },
    sms_date_of_issue: {
        type: String
    },
    sms_date_of_expiry: {
        type: String
    },
    sms_place_of_issue: {
        type: String
    },
    sms_issuing_authority: {
        type: String
    },
    indos_cerificate_no: {
        type: String
    },
    indos_date_of_issue: {
        type: String
    },
    indos_date_of_expiry: {
        type: String
    },
    indos_place_of_issue: {
        type: String
    },
    indos_issuing_authority: {
        type: String
    },
    simulator_cerificate_no: {
        type: String
    },
    simulator_date_of_issue: {
        type: String
    },
    simulator_date_of_expiry: {
        type: String
    },
    simulator_place_of_issue: {
        type: String
    },
    simulator_issuing_authority: {
        type: String
    },
    engine_room_cerificate_no: {
        type: String
    },
    engine_room_date_of_issue: {
        type: String
    },
    engine_room_date_of_expiry: {
        type: String
    },
    engine_room_place_of_issue: {
        type: String
    },
    engine_room_issuing_authority: {
        type: String
    },
    btm_cerificate_no: {
        type: String
    },
    btm_date_of_issue: {
        type: String
    },
    btm_date_of_expiry: {
        type: String
    },
    btm_place_of_issue: {
        type: String
    },
    btm_issuing_authority: {
        type: String
    },
    marpol_cerificate_no: {
        type: String
    },
    marpol_date_of_issue: {
        type: String
    },
    marpol_date_of_expiry: {
        type: String
    },
    marpol_place_of_issue: {
        type: String
    },
    marpol_issuing_authority: {
        type: String
    },
    ecdis_generic_cerificate_no: {
        type: String
    },
    ecdis_generic_date_of_issue: {
        type: String
    },
    ecdis_generic_date_of_expiry: {
        type: String
    },
    ecdis_generic_place_of_issue: {
        type: String
    },
    ecdis_generic_issuing_authority: {
        type: String
    },
    ecdis_specific_cerificate_no: {
        type: String
    },
    ecdis_specific_date_of_issue: {
        type: String
    },
    ecdis_specific_date_of_expiry: {
        type: String
    },
    ecdis_specific_place_of_issue: {
        type: String
    },
    ecdis_specific_issuing_authority: {
        type: String
    },
    raai_cerificate_no: {
        type: String
    },
    raai_date_of_issue: {
        type: String
    },
    raai_date_of_expiry: {
        type: String
    },
    raai_place_of_issue: {
        type: String
    },
    raai_issuing_authority: {
        type: String
    },
    brm_cerificate_no: {
        type: String
    },
    brm_date_of_issue: {
        type: String
    },
    brm_date_of_expiry: {
        type: String
    },
    brm_place_of_issue: {
        type: String
    },
    brm_issuing_authority: {
        type: String
    },
    bwm_cerificate_no: {
        type: String
    },
    bwm_date_of_issue: {
        type: String
    },
    bwm_date_of_expiry: {
        type: String
    },
    bwm_place_of_issue: {
        type: String
    },
    bwm_issuing_authority: {
        type: String
    },
    lvh_cerificate_no: {
        type: String
    },
    lvh_date_of_issue: {
        type: String
    },
    lvh_date_of_expiry: {
        type: String
    },
    lvh_place_of_issue: {
        type: String
    },
    lvh_issuing_authority: {
        type: String
    },
    sim_course_cerificate_no: {
        type: String
    },
    sim_course_date_of_issue: {
        type: String
    },
    sim_course_date_of_expiry: {
        type: String
    },
    sim_course_place_of_issue: {
        type: String
    },
    sim_course_issuing_authority: {
        type: String
    },
    tanker_cerificate_no: {
        type: String
    },
    tanker_date_of_issue: {
        type: String
    },
    tanker_date_of_expiry: {
        type: String
    },
    tanker_place_of_issue: {
        type: String
    },
    tanker_issuing_authority: {
        type: String
    },
    tanker_cerificate_no: {
        type: String
    },
    tanker_date_of_issue: {
        type: String
    },
    tanker_date_of_expiry: {
        type: String
    },
    tanker_place_of_issue: {
        type: String
    },
    tanker_issuing_authority: {
        type: String
    },
    tasco_cerificate_no: {
        type: String
    },
    tasco_date_of_issue: {
        type: String
    },
    tasco_date_of_expiry: {
        type: String
    },
    tasco_place_of_issue: {
        type: String
    },
    tasco_issuing_authority: {
        type: String
    },
    chem_cerificate_no: {
        type: String
    },
    chem_date_of_issue: {
        type: String
    },
    chem_date_of_expiry: {
        type: String
    },
    chem_place_of_issue: {
        type: String
    },
    chem_issuing_authority: {
        type: String
    },
    gasco_cerificate_no: {
        type: String
    },
    gasco_date_of_issue: {
        type: String
    },
    gasco_date_of_expiry: {
        type: String
    },
    gasco_place_of_issue: {
        type: String
    },
    gasco_issuing_authority: {
        type: String
    },
    dce_petrol_cerificate_no: {
        type: String
    },
    dce_petrol_date_of_issue: {
        type: String
    },
    dce_petrol_date_of_expiry: {
        type: String
    },
    dce_petrol_place_of_issue: {
        type: String
    },
    dce_petrol_issuing_authority: {
        type: String
    },
    dce_chem_cerificate_no: {
        type: String
    },
    dce_chem_date_of_issue: {
        type: String
    },
    dce_chem_date_of_expiry: {
        type: String
    },
    dce_chem_place_of_issue: {
        type: String
    },
    dce_chem_issuing_authority: {
        type: String
    },
    dce_gas_cerificate_no: {
        type: String
    },
    dce_gas_date_of_issue: {
        type: String
    },
    dce_gas_date_of_expiry: {
        type: String
    },
    dce_gas_place_of_issue: {
        type: String
    },
    dce_gas_issuing_authority: {
        type: String
    },
    lcb_cerificate_no: {
        type: String
    },
    lcb_date_of_issue: {
        type: String
    },
    lcb_date_of_expiry: {
        type: String
    },
    lcb_place_of_issue: {
        type: String
    },
    lcb_issuing_authority: {
        type: String
    },
    other_course_cerificate_no: {
        type: String
    },
    other_course_date_of_issue: {
        type: String
    },
    other_course_date_of_expiry: {
        type: String
    },
    other_course_place_of_issue: {
        type: String
    },
    other_course_issuing_authority: {
        type: String
    },
    martime_cerificate_no: {
        type: String
    },
    martime_date_of_issue: {
        type: String
    },
    martime_date_of_expiry: {
        type: String
    },
    martime_place_of_issue: {
        type: String
    },
    martime_issuing_authority: {
        type: String
    },
    shm_cerificate_no: {
        type: String
    },
    shm_date_of_issue: {
        type: String
    },
    shm_date_of_expiry: {
        type: String
    },
    shm_place_of_issue: {
        type: String
    },
    shm_issuing_authority: {
        type: String
    },
    //8)References
    reference_name_1: {
        type: String
    },
    reference_company_1: {
        type: String
    },
    reference_telephone_1: {
        type: String
    },
    reference_name_2: {
        type: String
    },
    refernce_company_2: {
        type: String
    },
    reference_telephone_2: {
        type: String
    },
    //9)How do you come to know about us
    company_presentation: {
        type: String
    },
    marine_club: {
        type: String
    },
    marine_magzine: {
        type: String
    },
    newspaper_advertisement: {
        type: String
    },
    told_by_seagoing_friend: {
        type: String
    },
    direct_mail: {
        type: String
    },
    others_advert: {
        type: String
    },
    //10)Personal Details
    height: {
        type: String
    },
    weight: {
        type: String
    },
    BMI: {
        type: String
    },
    color_of_hair: {
        type: String
    },
    color_of_eyes: {
        type: String
    },
    any_major_surgery: {
        type: String
    },
    details_surgery: {
        type: String
    },
    defect_in_hearing: {
        type: String
    },
    defect_in_vision: {
        type: String
    },
    defect_in_speech: {
        type: String
    },
    health_affected_by_climate: {
        type: String
    },
    health_affected_by_climate_reason: {
        type: String
    },
    last_drawn_wages: {
        type: String
    },
    //11) Additional Information
    applied_before: {
        type: String
    },
    ever_bonded: {
        type: String
    },
    crime_convicted: {
        type: String
    },
    crime_convicted_details: {
        type: String
    },
    ship_accident: {
        type: String
    },
    ship_accident_details: {
        type: String
    },
    certificate_suspended: {
        type: String
    },
    certificate_suspended_from: {
        type: String
    },
    certificate_suspended_to: {
        type: String
    },
    //12 Reason For Application
    leave_your_present_employment: {
        type: String
    },
    anything_further_support: {
        type: String
    },
    may_approach_employer: {
        type: String
    },
    employer_contact_details: {
        type: String
    },
    notice_to_attend_interview: {
        type: String
    },
    //13)SEA Experience
    special_experience: {
        type: Array
    },
    //14)on shore services
    on_shore: {
        type: Array
    },
    //15) Declaration
    declaration_date: {
        type: String
    },
    formal_photo: {

        type: String
    },
    signature_photo: {

        type: String
    },
    declaration_date: {
        type: String
    },
    twitter: {

        type: String
    },
    linkedin: {

        type: String
    },
    instagram: {

        type: String
    },
    facebook: {

        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }




});

const Form = mongoose.model('form', FormSchema);

module.exports = Form;